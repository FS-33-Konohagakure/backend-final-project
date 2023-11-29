const express = require("express");
const route = express.Router();

const userRoutes = require("./user-route");
const dokterRoutes = require("./dokter-route");
const foodRoutes = require("./food-route");
const authRoutes = require("./auth-route");
const verifyToken = require("../middleware/auth");

route.get("/", (req, res) => {
    res.json("Selamat datang di aplikasi backend todo list");
});
  
route.use("/users", userRoutes);
route.use("/auth", authRoutes);
route.use("/dokter", dokterRoutes);
route.use("/food", foodRoutes);

module.exports = route;