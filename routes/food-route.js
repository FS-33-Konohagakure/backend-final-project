const express = require("express");
const route = express.Router();

const {
  getAllFood,
  getFoodById,
  addFood,
  editFoodById,
  deleteFoodById,
} = require("../controllers/food-controller");

route.get("/", getAllFood);
route.get("/:id", getFoodById);
route.post("/", addFood);
route.put("/:id", editFoodById);
route.delete("/:id", deleteFoodById);

module.exports = route;
