const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.json("Selamat datang di aplikasi backend todo list");
});
  
module.exports = route;