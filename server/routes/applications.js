const express = require('express');
const applicationController = require('../controllers/applicationController');
const sessionController = require('../controllers/sessionController');

const router = express.Router({ mergeParams: true });

const stepRouter = require('../routes/steps');

// get all applications for this user_id
router.get(
  '/',
  // sessionController.isLoggedIn,
  applicationController.getAllApps,
  (req, res) => {
    res.status(200).json(res.locals.userData);
  }
);

// add new app

<<<<<<< HEAD
router.post("/", applicationController.addApp, (req, res) => {
=======
router.post('/', applicationController.addApp, (req, res) => {
>>>>>>> f7bfed97764eb11a3fa248ba1b8601231b2132ca
  res.status(200).json({});
});

// edit app
router.put('/:app_id', applicationController.editApp, (req, res) => {
  res.status(200).json({});
});

// delete app
router.delete('/:app_id', applicationController.deleteApp, (req, res) => {
  res.status(200).json({});
});

router.use('/:app_id/step', stepRouter);

module.exports = router;
