// router --!

var express = require('express');
var app = express();
const motivations = require('motivations');

app.get('/', function(request, response) {
	
	response.send("hello");		
});

app.get('/hi', function(request, response) {

        response.send("hi");
});

app.get('/motivations', function(request, response) {

	var rand = Math.random() * (20 - 0) + 0;
        response.send(motivations[rand]);
});


module.exports = app;

