const express = require("express");
const route = express.Router();

const userRoutes = require("./user-route");
const dokterRoutes = require("./dokter-route");
const foodRoutes = require("./food-route");
const authRoutes = require("./auth-route");
const verifyToken = require("../middleware/auth");

route.get("/", (req, res) => {
    res.json("Selamat datang di aplikasi Konsultasi Dokter dan Informasi Kesehatan Bersama SEHATIN");
});
  
route.use("/users", verifyToken, userRoutes);
route.use("/auth", authRoutes);
route.use("/dokters", verifyToken, dokterRoutes);
route.use("/foods", verifyToken, foodRoutes);

module.exports = route;