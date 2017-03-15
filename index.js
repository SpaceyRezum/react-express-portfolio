var express = require('express');
var app = express();

var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/portfolio-alexis');

// bodyParser so body of client-to-server requests can be read as JSON object
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Allow bundle.js to be served in index.html
app.use(webpackMiddleware(webpack(require('./webpack.config.js'))));

// Serve static assets.
app.use(express.static('public'));

// Serve API routes.
app.use('/api/projects', require('./api/projects'));

// If none of the above matches, serve public/index.html.
app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'))

app.listen(8080);
