const express = require('express');
const usersController = require('../controllers/usersController.js');

const router = express.Router();

// get user data at login
router.get('/:user_id', usersController.getUserData, (req, res) => {
  res.status(200).json(res.locals.userData);
});

// add new user
router.post('/', usersController.addUser, (req, res) => {
  res.status(200).json({});
});

// edit user
router.put('/:user_id', usersController.editUser, (req, res) => {
  res.status(200).json({});
});

// delete
router.delete('/:user_id', usersController.deleteUser, (req, res) => {
  res.status(200).json({});
});

module.exports = router;
