var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var fileName = "."+q.pathname;
    fs.readFile(fileName, (err, data) => {
        if(err) {
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("File not found");
        }
        res.writeHead(200, {"Content-Type":'text/html'});
        res.write(data+" "+fileName);
        return res.end();
    })
}).listen(8080);
