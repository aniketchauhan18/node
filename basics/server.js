const http = require('http')

// server

const server = http.createServer((req, res) => {

  const pathName = req.url;

  if (pathName === '/' ||pathName === '/overview') {
    res.end("Welcome to overview")
  } else if (pathName === '/product') {
    res.end('Welcome to product')
  } else {
    res.writeHead(404, { 
      'Content-type': 'text/html', 
    })
    res.end('<h1>Page not found!!</h1>');
  }
})

server.listen(8000, '127.0.0.1', () => {
  console.log("Listening on port 3000")
})
