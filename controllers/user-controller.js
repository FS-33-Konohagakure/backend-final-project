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
};
