var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, { 'content-Type': 'text/html'});
    res.end('<h1>Hello CMU</h1>');
}).listen(54321, function() {
    console.log('server listening on port 54321');
});