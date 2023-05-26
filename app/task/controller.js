const Task = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const task = await Task.find({ users: req.user.user_id }).populate(
        "users"
      ); // show all data
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { title, description } = req.body;

      let task = await Task({ title, description, users: req.user.user_id }); // add data
      await task.save();
      res.status(201).json({ task, message: "success create task" });
    } catch (error) {
      res.status(500).json({ message: "failed add data" });
    }
  },
  showDetail: async (req, res) => {
    try {
      const { id } = req.params;

      let task = await Task.findOne({
        _id: id,
        users: req.user.user_id,
      }).populate("users"); // show detail data
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  actionEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const { description, title } = req.body;

      let task = await Task.findOneAndUpdate(
        // update data
        { _id: id },
        { description, title, users: req.user.user_id }
      );
      res.status(200).json({ task, message: "success update data" });
    } catch (error) {
      res.status(500).json({ message: "failed update data" });
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      await Task.findOneAndRemove({ _id: id, users: req.user.user_id }); // delete one data
      res.status(200).json({ message: "success delete" });
    } catch (error) {
      res.status(500).json({ message: "failed delete data" });
    }
  },
  actionDeleteAll: async (req, res) => {
    try {
      const users = req.user.user_id;
      await Task.deleteMany({ users }); // delete one data
      res.status(200).json({ message: "success delete all" });
    } catch (error) {
      res.status(500).json({ message: "failed delete all data" });
    }
  },
};
