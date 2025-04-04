const os = require("os");

// Get hostname
console.log("Hostname:", os.hostname());

// Get OS type
console.log("OS Type:", os.type());

// Get platform
console.log("Platform:", os.platform());

// Get system architecture
console.log("Architecture:", os.arch());

// Get number of CPU cores
console.log("CPU Cores:", os.cpus().length);

// Get CPU details
console.log("CPU Info:", os.cpus());

// Get total memory in MB
console.log("Total Memory (MB):", (os.totalmem() / 1024 / 1024).toFixed(2));

// Get free memory in MB
console.log("Free Memory (MB):", (os.freemem() / 1024 / 1024).toFixed(2));

// Get system uptime in minutes
console.log("System Uptime (minutes):", (os.uptime() / 60).toFixed(2));
