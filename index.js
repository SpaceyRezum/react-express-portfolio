var express = require('express');
var app = express();
var cors = require('cors');
var port = process.env.PORT || 8080;
require('dotenv').config();

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/portfolio-alexis');

// bodyParser so body of client-to-server requests can be read as JSON object
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Serve static assets.
app.use(express.static('build'));

// Serve API routes.
app.use('/api/projects', require('./api/projects'));
app.use('/api/contact', require('./api/contact'));

// If none of the above matches, serve public/index.html.
app.get('*', (req, res) => res.sendFile(__dirname + '/build/index.html'));

app.listen(port, function() {
    console.log("Server running on port: %d", port);
});
