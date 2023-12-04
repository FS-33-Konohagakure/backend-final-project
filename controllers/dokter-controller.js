const { jwtDecode } = require("jwt-decode");
const db = require("../models");

module.exports = {
  getAllDokter: async (req, res) => {
    try {
      const dokters = await db.Dokters.findAll();

      if (!dokters) {
        res.json({
          message: "Dokter not found",
        });
      }

      res.json({
        message: "Berhasil mendapatkan data dokter",
        data: dokters,
      });
    } catch {
      res.json({
        message: "Cannot find dokter",
        error: error.message,
      });
    }
  },

  getDokterById: async (req, res) => {
    const { id } = req.params;

    try {
      const dokter = await db.Dokters.findByPk(id);

      if (!dokter) {
        res.json({
          message: "Dokter not found",
        });
      }

      res.json({
        message: "Berhasil mendapatkan dokter by id",
        data: dokter,
      });
    } catch {
      res.json({
        message: "cannot find dokter",
        error: error.message,
      });
    }
  },
  addDokter: async (req, res) => {
      let data = req.body;

    try {
      //checkrole
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json({ error: "Unauthorized." });
      }
      
      const decoded = jwtDecode(token);
      console.log(decoded);

      if (decoded.role !== "admin") {
        return res
          .status(403)
          .json({ error: "Access denied. Insufficient permissions." });
      }

      // addDokter
        const dokters = await db.Dokters.findAll();
        const newDokter = {
          id: dokters[dokters.length - 1].id + 1,
          name: data.name,
          image_normal: data.image_normal,
          image_crop: data.image_crop,
          spesialisasi: data.spesialisasi,
          pengalaman: data.pengalaman,
          str: data.str,
          hospital: data.hospital,
          biaya: data.biaya,
          alumnus: data.alumnus,
          info: data.info,
          jadwal_hari: data.jadwal_hari,
          jadwal_jam: data.jadwal_jam,
          kategoriId: data.kategoriId,
        };

        await db.Dokters.create(newDokter);

        res.status(201).json({
          message: "berhasil menambahkan dokter baru",
          data: newDokter,
        });
      } catch (error) {
        res.json({
          message: "gagal menambahkan dokter baru",
          error: error.message,
        });
      }
    
  },
  editDokterById: async (req, res) => {
    // checkrole
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json({ error: "Unauthorized." });
      }
    
      const decoded = jwtDecode(token);
      console.log(decoded);


      if (decoded.role !== "admin") {
        return res
          .status(403)
          .json({ error: "Access denied. Insufficient permissions." });
      }

      //editDokterById
      const { id } = req.params;
      const {
        name,
        image_normal,
        image_crop,
        spesialisasi,
        pengalaman,
        str,
        hospital,
        biaya,
        alumnus,
        info,
        jadwal_hari,
        jadwal_jam,
        kategoriId,
      } = req.body;

      const index = await db.Dokters.findByPk(id);
      db.Dokters[index] = {
        id,
        name,
        image_normal,
        image_crop,
        spesialisasi,
        pengalaman,
        str,
        hospital,
        biaya,
        alumnus,
        info,
        jadwal_hari,
        jadwal_jam,
        kategoriId,
      };

      index.id = id || index.id;
      index.name = name || index.name;
      index.image_normal = image_normal || index.image_normal;
      index.image_crop = image_crop || index.image_crop;
      index.spesialisasi = spesialisasi || index.spesialisasi;
      index.pengalaman = pengalaman || index.pengalaman;
      index.str = str || index.str;
      index.hospital = hospital || index.hospital;
      index.biaya = biaya || index.biaya;
      index.alumnus = alumnus || index.alumnus;
      index.info = info || index.info;
      index.jadwal_hari = jadwal_hari || index.jadwal_hari;
      index.jadwal_jam = jadwal_jam || index.jadwal_jam;
      index.kategoriId = kategoriId || index.kategoriId;

      await index.save();

      const dokter = await db.Dokters.findByPk(id);
      res.json({
        message: "Berhasil mengubah data dokter",
        data: dokter,
      });
    } catch {
      res.json({
        message: "Gagal mengubah data dokter",
        error: error.message,
      });
    }
  },

  deleteDokterById: async (req, res) => {
      const { id } = req.params;

    try {
      //checkrole
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json({ error: "Unauthorized." });
      }
      
      const decoded = jwtDecode(token);
      console.log(decoded);
  
  
      if (decoded.role !== "admin") {
        return res
          .status(403)
          .json({ error: "Access denied. Insufficient permissions." });
      }

      //deleteDokterById
        const dokter = await db.Dokters.findByPk(id);

        if (!dokter) {
          res.json({
            message: "Dokter not found.",
          });
        }

        await dokter.destroy();

        const dokters = await db.Dokters.findAll();

        res.json({
          message: "Berhasil menghapus dokter by id",
          data: dokters,
        });
      } catch {
        res.json({
          message: "Cannot delete dokter",
          error: error.message,
        });
      }
  },
};
