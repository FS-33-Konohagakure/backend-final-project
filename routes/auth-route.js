const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const route = express.Router();

const checkRole = require('../middleware/role');
const User = require("../models/Users");
const db = require("../models/index");


const adminFeatures = ['addDokter', 'editDokterById', 'deleteDokterById' ];
const userFeatures = [ 'getAllDokter', 'getDokterById'];


route.post("/login", async (req, res) => {
  let data = req.body;

  const user = await db.Users.findOne({ where: { email: data.email } });

  if (!user) {
    res.json({
      message: "Incorrect Email!",
    });
    return;
  }

  if (bcrypt.compareSync(data.password, user.password)) {
    const token = jwt.sign({ email: data.email, role: user.role}, "ghfffygdf");
    res.json({
      message: "SUCCESSFULLY LOGIN",
      token,
    });
    return;
  }

  res.json({
    message: "Incorrect Password",
  });
});

route.get('/admin/dokter', checkRole('admin'), (req, res) => {
  res.json({ features: adminFeatures });
});

route.get('/user/dokter', checkRole('user'), (req, res) => {
  res.json({ features: userFeatures });
});

route.post("/regis", async (req, res) => {
  let data = req.body;

  let saltRounds = 10;
  let hashPassword = bcrypt.hashSync(data.password, saltRounds);
  data.password = hashPassword;

  await db.Users.create(data);

  res.json({
      message: "SUCCESSFULLY REGISTERED",
    
  });
});

module.exports = route;
