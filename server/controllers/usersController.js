const db = require('../models/model.js');

const usersController = {};

usersController.getUserData = (req, res, next) => {
  const UID = req.params.user_id;

  // get user's personal data
  const getUserData = 'SELECT first_name FROM job_seekers WHERE id = $1';

  db.query(getUserData, [UID]) // array of variables to use in query
    .then((data) => {
      res.locals.userData = data;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'usersController.getUserData: ERROR: Error getting database',
        message: {
          err: 'usersController.getUserData: ERROR: Check database for details',
        },
      });
    });
};

usersController.addUser = (req, res, next) => {
  const {
    id,
    first_name,
    last_name,
    email,
    password,
    cur_salary,
    DOB,
  } = req.body;
  const addUser =
    'INSERT INTO job_seekers (id , first_name, last_name, email, password, cur_salary, DOB) VALUES ($1, $2, $3, $4, $5, $6, $7)';

  db.query(addUser, [
    id,
    first_name,
    last_name,
    email,
    password,
    cur_salary,
    DOB,
  ])
    .then((data) => {
      // return something?
      console.log('data from addUser:', data);
      return next();
    })
    .catch((err) => {
      return next({
        log: 'usersController.addUser: ERROR: Error writing to database',
        message: {
          err: 'usersController.addUser: ERROR: Check database for details',
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
