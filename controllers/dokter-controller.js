const Dokter = require("../models/Dokters");
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

  getDokterByKategoriId: async (req, res) => {
    const { kategoriId } = req.params;
    try {
      const kategoriDokters = await db.dokters.filter(
        (dokter) => dokter.kategoriId === kategoriId
      );

      if (!kategoriDokters) {
        res.json({
          message: "Kategori dokter not found",
        });
      }
      res.json({
        message: "Berhasil mendapatkan dokter by kategori",
        data: kategoriDokters,
      });
    } catch {
      res.json({
        message: "Cannot find Dokter kategori",
        error: error.message,
      });
    }
  },
  addDokter: async (req, res) => {
    let data = req.body;

    try {
      const newDokter = {
        id: db.Dokter[Dokter.length - 1].id + 1,
        value: data.value,
      };

      await db.Dokter.push(newDokter);

      res.status(201).json({
        message: "berhasil menambahkan dokter baru",
        data: Dokter,
      });
    } catch (error) {
      res.json({
        message: "gagal menambahkan dokter baru",
        error: error.message,
      });
    }
  },
  editDokterById: async (req, res) => {
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
    const index = await db.Dokter.findByPk(id);
    db.Dokter[index] = {
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

    res.json({
      message: "Berhasil mengubah data dokter",
      data: Dokter,
    });
  },

  deleteDokterById: async (req, res) => {
    const { id } = req.params;

    try {
      const dokter = await db.Dokter.findByPk(id);

      if (!dokter) {
        res.json({
          message: "Dokter not found.",
        });
      }

      await dokter.destroy();

      const dokters = await db.Dokter.findAll();

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
