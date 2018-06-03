var http = require('http');

var server = http.createServer();

var host = '192.168.0.56';
var port = 3000;
server.listen(port, 50000, function() {
    console.log('웹서버가 실행되었습니다 -> ' + host + ':' + port);
});