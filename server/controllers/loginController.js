const db = require("../models/model.js");

const loginController = {};

loginController.login = (req, res, next) => {
  next();
};

module.exports = loginController;
