const express = require('express');
const viewController = require('./../controllers/viewController');

const router = express.Router();

router.get('/', viewController.getOverview);
router.get('/newUser', viewController.getNewUserForm);
router.get('/updateUser', viewController.getUpdateUserForm)

module.exports = router;