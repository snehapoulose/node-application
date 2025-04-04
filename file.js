const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    fs.appendFile('index.html','Hello content!',(err)=>{
        if(err) throw err;
        console.log('Saved!');
    })
});

server.listen(4000, () => {
    console.log('Server running on http://localhost:3000');
});
