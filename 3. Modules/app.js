var express = require('express');
var http = require('http');
var customModule = require('./myModule');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + customModule.myDateTime());
    res.end();
}).listen(8080);

console.log(customModule.myAge);