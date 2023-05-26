const User = require("./model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  actionCreate: async (req, res) => {
    try {
      const { username } = req.body;
      const { password } = req.body;

      let user = await User({ username, password });
      await user.save();
      res.status(201).json({ message: "success add user", user });
    } catch (error) {
      res.status(500).json({ message: "failed add user" });
    }
  },
  actionLogin: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        res.json({ message: "user not found" });
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        res.json({ message: "password wrong" });
      }
      const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: "1800s",
      });
      res.status(200).json({ message: "success login", token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
