const express = require("express");
const route = express.Router();

const {
  getAllDokter,
  getDokterById,
  getDokterByKategoriId,
  addDokter,
  editDokterById,
  deleteDokterById,
} = require("../controllers/dokter-controller");

route.get("/", getAllDokter);
route.get("/:id", getDokterById);
route.get("/kategoriid", getDokterByKategoriId);
route.post("/", addDokter);
route.put("/:id", editDokterById);
route.delete("/:id", deleteDokterById);

module.exports = route;