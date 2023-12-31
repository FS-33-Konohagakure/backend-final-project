const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const route = express.Router();

const db = require("../models/index");


route.post("/login", async (req, res) => {
  let data = req.body;

  const user = await db.Users.findOne({ where: { email: data.email, role: data.role } });

  if (!user) {
    res.json({
      message: "Incorrect Email dan Role!",
    });
    return;
  }

  if (bcrypt.compareSync(data.password, user.password)) {
    const token = jwt.sign({ email: data.email, role: data.role}, "ghfffygdf");
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
