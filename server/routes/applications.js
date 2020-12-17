const express = require("express");

const router = express.Router();

const stepRouter = require("../routes/steps");

router.get("/", (req, res) => res.status(200).json({ hi: "there" }));

router.use("/:app_id/step", stepRouter);

module.exports = router;
