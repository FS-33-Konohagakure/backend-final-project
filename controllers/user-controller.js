const User = require("../models/Users");
const db = require("../models");


module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await db.Users.findAll();

      if (!users) {
        res.json({
          message: "User not found",
        });
      }

      res.json({
        message: "Berhasil mendapatkan data user",
        data: users,
      });

    } catch {
      res.json({
        message: "Cannot find user",
        error: error.message,
      });
    } 
  },

  getUserById: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await db.Users.findByPk(id);

      if (!user) {
        res.json({
          message: "User not found",
        });
      }

      res.json({
        message: "Berhasil mendapatkan user by id",
        data: user,
      });

    } catch {
      res.json({
        message: "Cannot find user",
        error: error.message,
      });
    }
  },
  editUserById: async (req, res) => {
    const { id } = req.params;
    const { username, email, password, role } = req.body;

    const index = await db.Todo.findByPk(id);
    db.Todo[index] = { id, username, email, password, role };

    index.id = id || index.id;
    index.username = username || index.username;
    index.email = email || index.email;
    index.password = password || index.password;
    index.role = role || index.role;

    await index.save();

    res.json({
      message: "berhasil mengubah data user",
      data: User,
    });
  },
  deleteUserById: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await db.User.findByPk(id);

      if (!user) {
        res.json({
          message: "User not found.",
        });
      }

      await User.destroy();

      const users = await db.User.findAll();

      res.json({
        message: "Berhasil menghapus user by id",
        data: users,
      });
    } catch {
      res.json({
        message: "Cannot delete user",
        error: error.message,
      });
    }
  },
};
