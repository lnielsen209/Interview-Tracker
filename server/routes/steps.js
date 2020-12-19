const express = require("express");

const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => res.status(200).json({ hi: "again" }));

module.exports = router;
