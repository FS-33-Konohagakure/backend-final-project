const Users = require("../models/Users");
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
        // checkrole
    try {
      const { id } = req.params;
      const { username, email, password, role } = req.body;

      const index = await db.Users.findByPk(id);
      db.Users[index] = { id, username, email, password, role };

      index.id = id || index.id;
      index.username = username || index.username;
      index.email = email || index.email;
      index.password = password || index.password;
      index.role = role || index.role;

      await index.save();
      const user = await db.Users.findByPk(id);

      res.json({
        message: "berhasil mengubah data user",
        data: user,
      });
    
    } catch {
      res.json({
        message: "Gagal mengubah data user",
        error: error.message,
      });
    }
  },
  
  deleteUserById: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await db.Users.findByPk(id);

      if (!user) {
        res.json({
          message: "User not found.",
        });
      }

      await user.destroy();

      const users = await db.Users.findAll();

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
