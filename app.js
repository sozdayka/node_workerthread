const http = require('http');

const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World 2</h1>');
});

server.listen(port,() => {
  res.status(200).send(`Server running at port `+port);
});