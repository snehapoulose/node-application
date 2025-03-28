const fs = require('fs');
const http = require('http');

console.log('1. Start of the script');

// Simulating File I/O (I/O Phase)
fs.readFile(__filename, () => {
    console.log('4. File read operation completed (I/O Phase)');
});

// Simulating an HTTP Server (Timers & Event Loop)
const server = http.createServer((req, res) => {
    console.log('5. Incoming Request (Poll Phase)');
    
    // setTimeout - goes to the Timers Phase
    setTimeout(() => {
        console.log('7. setTimeout executed (Timers Phase)');
    }, 0);

    // setImmediate - goes to the Check Phase
    setImmediate(() => {
        console.log('6. setImmediate executed (Check Phase)');
    });

    res.end('Hello from Node.js!');
});

server.listen(3000, () => {
    console.log('2. Server is listening on port 3000');
});

// Process.nextTick - Executed before the Event Loop continues
process.nextTick(() => {
    console.log('3. process.nextTick executed (Microtask Queue)');
});
