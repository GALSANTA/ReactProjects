const router = require('express').Router();
const UserController = require('./UserController');

router.post('/login', (req, res) =>UserController.login(req, res));

module.exports = router;