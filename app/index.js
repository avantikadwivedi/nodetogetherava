// router --!

var express = require('express');
var app = express();

app.get('/', function(request, response) {
	
	response.send("hellooo");		
});

app.get('/hi', function(request, response) {

        response.send("hi");
});

module.exports = app;

