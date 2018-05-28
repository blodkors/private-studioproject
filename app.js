var express = require("express");
var http = require("http");
var app = express();
app.set('port', process.env.PORT || 3002);
app.get('/', function(req, res) {
    res.send("Hello CMU");
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('server listening on port' + app.get('port'));
});