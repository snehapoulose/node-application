const EventEmitter = require('node:events')
const eventEmitter = new EventEmitter();

// eventEmitter.on('start', (start,end) =>{
//     console.log(`started ${start} from ${end}`);
// });

// eventEmitter.emit('start', 23,50);
eventEmitter.emit("clicked")