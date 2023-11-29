const Dokter = require("../models/Dokters");
const db = require("../models");

module.exports = {
    getAllDokter: async (req, res) => {
      const dokters = await db.Dokters.findAll();
  
      res.json({
        message: "berhasil mendapatkan data dokter",
        data: dokters,
      });
    },
  
    getDokterById: async (req, res) => {
      const { id } = req.params;
      const dokter = await db.Dokters.findByPk(id);
  
      res.json({
        message: "berhasil mendapatkan dokter by id",
        data: dokter,
      });
    },
  };