const path = require("path");
const fs = require("fs");
const { error } = require("console");
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.join(__dirname,"api","pathEvents.js"))
fs.mkdir(path.join(__dirname,"api/test.txt"),{},(error)=>{  // Creating folder 
    if(error) throw error;
 });

//  fs.writeFile(path.join(__dirname,"/api","index.html"),"<h1>Hello World</h1>",(error)=>{
//     if(error) throw error;
//  })

// fs.readFile('/api/test.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data);
//   });
