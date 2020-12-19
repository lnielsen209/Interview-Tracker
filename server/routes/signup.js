const express = require("express");
const signupController = require("../controllers/signupController");
const router = express.Router();

router.post("/", signupController.signup, (req, res) => {
  res.status(200).json({ you: "signedup" });
});

module.exports = router;
