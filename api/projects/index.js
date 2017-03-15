var express = require('express');
var router = new express.Router();
var controller = require('./controller');

router.get('/', controller.index);
router.get('/:name', controller.show);

module.exports = router;