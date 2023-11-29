const express = require("express");
const route = express.Router();

const {
  getAllFood,
  getFoodById,
  getFoodByKategoriId,
  addFood,
  editFoodById,
  deleteFoodById,
} = require("../controllers/food-controller");

route.get("/", getAllFood);
route.get("/:id", getFoodById);
route.get("/kategori_id", getFoodByKategoriId);
route.post("/", addFood);
route.put("/:id", editFoodById);
route.delete("/:id", deleteFoodById);

module.exports = route;
