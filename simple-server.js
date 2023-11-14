
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');

  // Create and read "welcome.txt"
  fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;

    // Read and console.log data from "welcome.txt"
    fs.readFile('welcome.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  });
});
