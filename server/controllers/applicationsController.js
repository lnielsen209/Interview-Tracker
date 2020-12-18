const db = require('../models/model.js');

const applicationsController = {};

applicationsController.getAllApps = () => {
  //     const UID = req.params.user_id;
  //   // get user's personal data
  //   const getUserData = 'SELECT first_name FROM job_seekers WHERE id = $1';
  //   db.query(getUserData, [UID]) // array of variables to use in query
  //     .then((data) => {
  //       res.locals.userData = data;
  //       return next();
  //     })
  //     .catch((err) => {
  //       return next({
  //         log: 'usersController.getUserData: ERROR: Error getting database',
  //         message: {
  //           err: 'usersController.getUserData: ERROR: Check database for details',
  //         },
  //       });
  //     });
};

applicationsController.addApp = () => {};

applicationsController.deleteApp = () => {};

applicationsController.editApp = () => {};

module.exports = applicationsController;
