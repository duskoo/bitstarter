
var fs = require('fs');

var buff = new Buffer(100);

buff = fs.readFileSync('index.html', 'utf-8');



var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buff.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
