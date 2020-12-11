const fs = require('fs');

// Blocking, synchronous way 
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);
const textOut = `This is what we know about the avacado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!');

// Non-blocking, asynchronous way 
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
    fs.readFile(`./txt/${data}.txt`, 'utf-8', (err, data) => {
        console.log(data);
    });
});
console.log('Will read file!');