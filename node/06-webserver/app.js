const http = require('http');

const port = process.env.PORT || 3000

http
    .createServer((req, res) => {
        // res.write('<h1>Hola mundo</h1>')
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        let response = {
            name: 'Will',
            lastname: 'AG',
            age: 22,
            uri: req.url
        }
        res.write(JSON.stringify(response));
        res.end();
    })
    .listen(port);