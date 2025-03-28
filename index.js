var http = require('http');

// Create a server
http.createServer((req, res) => {
    // Set the response header content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Write response content
    res.write('Hello World');

    // End the response
    res.end();
}).listen(3000, () => {
    console.log('Server is listening on port 8080');
});