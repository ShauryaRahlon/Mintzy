const express = require('express');
const authController = require('../Controllers/auth.controller');
const { register } = authController;
const router = express.Router();

router.post('/register', register);

module.exports = router;

