var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('index.html', function(err, html) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
        response.end();
    });
    } else {
            response.statusCode = 404;
            response.write('<img src="http://www.efharqs.com/wp-content/uploads/2016/12/404-cat.jpg">');
            response.end();
    }
});

server.listen(8080);