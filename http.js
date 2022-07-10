const http = require('http');



const server = http.createServer((req, res) => {
 
  if(req.url=='/'){

res.end('hello world')


  }
  if(req.url=='/about'){

res.end('short  history')

  }
  else{

res.end(`
  <h1>oops</h1>
  <a href="/">go back to home page</a>  
`)

  }
  
});

server.listen(3000)

