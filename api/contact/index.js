var express = require('express');
var router = new express.Router();
var controller = require('./controller');

router.post('/', controller.sendEmail);

module.exports = router;