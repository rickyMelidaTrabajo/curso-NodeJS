const { log } = require('console');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
        '<!Doctype html><html><head></head>' +
        '<body><h1>Hola Mundo</h1></body></html>'
        );
        
        res.end();
        let objetoUrl = url.parse(req.url);
        console.log('Path completo')
});

server.listen(8080);
console.log('Servidor corriendo');