const Foods = require("../models/Foods");
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
    let data = req.body;

    try {
      const newFood = {
        id: db.Foods[Foods.length - 1].id + 1,
        name: data.name,
        image: data.image,
        detail: data.detail,
        kategoriId: data.kategoriId
      };

      await db.Foods.push(newFood);

      res.status(201).json({
        message: "berhasil menambahkan food baru",
        data: Foods,
      });
    } catch (error) {
      res.json({
        message: "gagal menambahkan food baru",
        error: error.message,
      });
    }
  },
  editFoodById: async (req, res) => {
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
  },
  deleteFoodById: async (req, res) => {
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
  },
};
