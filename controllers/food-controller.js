const { jwtDecode } = require("jwt-decode");
const { checkRole } = require("../middleware/checkrole");
const db = require("../models");

module.exports = {
  getAllFood: async (req, res) => {
    try {
      const foods = await db.Foods.findAll();

      if (!foods) {
        res.json({
          message: "Food not found",
        });
      }
      res.json({
        message: "berhasil mendapatkan data food",
        data: foods,
      });
    } catch {
      res.json({
        message: "Cannot find food",
      });
    }
  },

  getFoodById: async (req, res) => {
    const { id } = req.params;

    try {
      const food = await db.Foods.findByPk(id);
      if (!food) {
        res.json({
          message: "Food not found",
        });
      }
      res.json({
        message: "Berhasil mendapatkan food by id",
        data: food,
      });
    } catch {
      res.json({
        message: "Cannot find food",
      });
    }
  },
  addFood: async (req, res) => {
    // checkrole

    const token = req.headers.authorization;
    const decoded = jwtDecode(token);
    console.log(decoded);

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized.' });
    }

    let data = req.body;

    try {
      const decodedHeader = jwtDecode(token, { header: true });
      console.log(decodedHeader);
  
      if (decodedHeader.role !== 'admin') {
        return res.status(403).json({ error: 'Access denied. Insufficient permissions.' });
      }

      const foods = await db.Foods.findAll();
      const newFood = {
        id: foods[foods.length - 1].id + 1,
        name: data.name,
        image: data.image,
        detail: data.detail,
        kategoriId: data.kategoriId,
      };

      await db.Foods.create(newFood);

      res.status(201).json({
        message: "berhasil menambahkan food baru",
        data: newFood,
      });

    } catch (error) {
      res.json({
        message: "gagal menambahkan food baru",
        error: error.message,
      });
    }
  },

  editFoodById: async (req, res) => {
    checkRole("admin")(req, res, async () => {
      const { id } = req.params;
      const { name, image, detail, kategoriId } = req.body;
      const index = await db.Foods.findByPk(id);
      db.Foods[index] = {
        id,
        name,
        image,
        detail,
        kategoriId,
      };

      index.id = id || index.id;
      index.name = name || index.name;
      index.image = image || index.image;
      index.detail = detail || index.detail;
      index.kategoriId = kategoriId || index.kategoriId;

      await index.save();
      const food = await db.Foods.findByPk(id);
      res.json({
        message: "Berhasil mengubah data food",
        data: food,
      });
    });
  },
  deleteFoodById: async (req, res) => {
    checkRole("admin")(req, res, async () => {
      const { id } = req.params;

      try {
        const food = await db.Foods.findByPk(id);

        if (!food) {
          res.json({
            message: "Food not found.",
          });
        }

        await food.destroy();

        const foods = await db.Foods.findAll();

        res.json({
          message: "Berhasil menghapus food by id",
          data: foods,
        });
      } catch {
        res.json({
          message: "Cannot delete food",
          error: error.message,
        });
      }
    });
  },
};
