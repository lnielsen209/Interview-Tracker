const express = require("express");
const loginController = require("../controllers/loginController");
const router = express.Router();

router.get("/", loginController.login, (req, res) => {
  res.status(200).json({ you: "tried to login" });
});

module.exports = router;
