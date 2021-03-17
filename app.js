const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('Welcome to home')
  }
})

server.listen(8080)