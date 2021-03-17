const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.write('Welcome back to home')
    res.end()
  }else if(req.url === '/api/courses'){
    res.write(JSON.stringify([1,2,3,4]))
    res.end()
  }
})

server.listen(8080)