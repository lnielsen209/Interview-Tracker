const db = require("../models/model.js");

const usersController = {};

usersController.getUserData = (req, res, next) => {
  const UID = req.params.user_id;

  // get user's personal data
  const getUserData = "SELECT * FROM job_seekers WHERE id = $1";

  db.query(getUserData, [UID]) // array of variables to use in query
    .then((data) => {
      res.locals.userData = data.rows[0];
      return next();
    })
    .catch((err) => {
      return next({
        log: "usersController.getUserData: ERROR: Error getting database",
        message: {
          err: "usersController.getUserData: ERROR: Check database for details",
        },
      });
    });
};

// usersController.editUser = (req, res, next) => {

// };

// usersController.deleteUser = (req, res, next) => {
//     // delete all apps and all steps
// };

module.exports = usersController;
