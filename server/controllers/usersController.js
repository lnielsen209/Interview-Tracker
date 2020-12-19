const db = require("../models/model");

const usersController = {};

usersController.getUsers = (req, res, next) => {
  db.query()
    .then((dat) => {
      console.log(data);
      res.locals.users = data.users;
      next();
    })
    .catch((err) => {
      next(err);
    });
};

usersController.addUser = (req, res, next) => {
  next();
};
