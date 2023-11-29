const Food = require("../models/Foods");
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
  getFoodByKategoriId: async (req, res) => {
    const { kategoriId } = req.params;
    try {
      const kategoriFoods = await db.foods.filter(
        (food) => food.kategoriId === kategoriId
      );

      if (!kategoriFoods) {
        res.json({
          message: "Kategori food not found",
        });
      }
      res.json({
        message: "Berhasil mendapatkan food by kategori",
        data: kategoriFoods,
      });
    } catch {
      res.json({
        message: "Cannot find Food kategori",
      });
    }
  },
  addFood: async (req, res) => {
    let data = req.body;

    try {
      const newFood = {
        id: db.Food[Food.length - 1].id + 1,
        value: data.value,
      };

      await db.Food.push(newFood);

      res.status(201).json({
        message: "berhasil menambahkan food baru",
        data: Food,
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
    const { nama, images, detail, kategoriId } = req.body;
    const index = await db.Food.findByPk(id);
    db.Food[index] = {
      id,
      nama,
      images,
      detail,
      kategoriId,
    };

    index.id = id || index.id;
    index.name = nama || index.nama;
    index.images = images || index.images;
    index.detail = detail || index.detail;
    index.kategoriId = kategoriId || index.kategoriId;

    await index.save();

    res.json({
      message: "Berhasil mengubah data food",
      data: Food,
    });
  },
  deleteFoodById: async (req, res) => {
    const { id } = req.params;

    try {
      const food = await db.Food.findByPk(id);

      if (!food) {
        res.json({
          message: "Food not found.",
        });
      }

      await food.destroy();

      const foods = await db.Food.findAll();

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
