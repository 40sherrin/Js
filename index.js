const http = require('http');
let app = http.createServer(function(req, res){
  if(req.url == '/'){
    res.end("Hello, and welcome to our home page.")
  }else if(req.url == '/about'){
    res.end("We are the world leading tech gaint. We believe the technology will bring everyone together")
  }else{
    res.end('you are kind of lost...')
  }
})

app.listen(5000)