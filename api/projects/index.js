var express = require('express');
var router = new express.Router();
var controller = require('./controller');

router.get('/', controller.getProjects);
router.get('/:id', controller.getProject);

module.exports = router;