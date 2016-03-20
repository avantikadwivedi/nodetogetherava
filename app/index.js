// router --!

var express = require('express');
var app = express();
const motivations = require('motivations');
const pickOne = require('pick-one');

app.get('/', function(request, response) {
	
	response.send("hello");		
});

app.get('/hi', function(request, response) {

        response.send("hi");
});

app.get('/motivations', function(request, response) {

        response.send(pickOne(motivations));
});


module.exports = app;

