const express = require("express");
const route = express.Router();

const {
  getAllDokter,
  getDokterById,
} = require("../controllers/dokter-controller");

route.get("/", getAllDokter);
route.get("/:id", getDokterById);

module.exports = route;