const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

let userSchema = mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    // jika user isinya password
    user.password = await bcrypt.hash(user.password, 8);
  }
});

module.exports = mongoose.model("User", userSchema);
