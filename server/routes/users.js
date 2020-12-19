const express = require("express");
const usersControllers = require("../controllers/usersController");
const router = express.Router();

router.get("/login", usersControllers.getUsers, (req, res) =>
  res.status(200).json({})
);

module.exports = router;
