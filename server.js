const http = require("http");

const server = http.createServer(function(req, res) {
    res.end("Hello Node First!!!");
});
server.listen(999);