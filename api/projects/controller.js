var content = require('./content');

exports.getProjects = function (req, res) {
  if (content.projects)
    res.send(content.projects);
  else
    res.status('400').send('Something went wrong, please try again later');
}

exports.getProject = function (req, res) {
  if (content.projects && req.params.id) {
    var project = content.projects.filter(function(project) { if (project.id == req.params.id) {return true} })[0];
    if (project) {
      res.send(project);
    } else {
      res.status('404').send('Sorry, the project you were looking for could not be found');
    }
  } else {
    res.status('400').send('Sorry, something went wrong, please try again later');
  }
}