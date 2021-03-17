const http = reuqire('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.send('Welcome to home')
  }
})

server.listen(8080)