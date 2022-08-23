const express = require('express');
const router = express.Router();
const contoller = require('./controller')
/* GET home page. */
router.post('/signin', contoller.signin);
router.post('/signup', contoller.signup);

module.exports = router;
