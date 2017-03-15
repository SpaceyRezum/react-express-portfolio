var Project = require('./model.js');

exports.index = function(req, res) {
  Project.find()
  .then((projects) => res.send(projects));
  // add catch
}

exports.show = function(req, res) {
	Project.find({ name: req.body.name })
	.then((project) => res.send(project));
	// add catch
}