var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer((req, res) => {
    fs.readFile("./index.html", "utf-8", function(err, html) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(html);
    })
}).listen(80);
