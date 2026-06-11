const fs = require('fs');

// CREATE
fs.writeFileSync('data.txt', 'Hello Node.js');
console.log("File Created");

// READ
let data = fs.readFileSync('data.txt', 'utf8');
console.log("Read:", data);

// UPDATE
fs.appendFileSync('data.txt', '\nUpdated Content');
console.log("File Updated");

// RENAME
fs.renameSync('data.txt', 'newdata.txt');
console.log("File Renamed");

// DELETE
fs.unlinkSync('newdata.txt');
console.log("File Deleted");