const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // Solution 1 (Memory expensive, time expensive)
    // fs.readFile('test-file.txt', (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // });

    // Solution 2: Streams (Readable Stream is so fast, response cannot handle, it is called backpressure)
    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data', chunk => {
    //     res.write(chunk);
    // });
    // readable.on('end', () => {
    //     res.end();
    // });
    // readable.on('error', err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('File not found');
    // });

    // Solution 3 (pipe() can handle speed between readable stream and response stream automatically)
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    // readable.pipe(writableDestination)
});

server.listen(8000, '127.0.0.1', () => console.log('Server is listening on Port 8000'));