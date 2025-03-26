// This line imports the createServer function from the http module in Node.js.
// The http module allows you to create an HTTP server. The createServer function is used to create a new HTTP server instance.
// By destructuring the import (i.e., { createServer }), you're extracting just the createServer function from the http module, rather than importing the entire module.
const { createServer } = require('node:http');

// hostname: This is set to '127.0.0.1', which is the local IP address (loopback address) of your machine. It refers to the local computer. Essentially, this means the server will only be accessible from the same machine it's running on (localhost).
// port: This is set to 3000, which is the port on which the server will listen for incoming HTTP requests. A port is like a gateway or entry point for network connections, and 3000 is commonly used for development servers.
const hostname = '127.0.0.1';
const port = 3000;


// createServer is called to create an HTTP server.
// It takes a callback function as its argument. This callback is executed whenever the server receives an incoming HTTP request. The function takes two parameters:
// req (Request): Represents the incoming request from the client (e.g., browser or API client). This object contains details like the HTTP method (GET, POST), URL, headers, etc.
// res (Response): Represents the response that the server will send back to the client. It’s used to configure the HTTP response, such as setting status codes, headers, and sending data.
const server = createServer((req, res) => {
  // res.statusCode sets the HTTP status code for the response.
  // 200 is the standard status code indicating OK, meaning the request was successfully processed, and everything is good.  
  res.statusCode = 200;

  // res.setHeader sets the HTTP headers for the response. In this case, it's setting the Content-Type header.
  // 'Content-Type' tells the client what kind of data is being sent in the response.
  // 'text/plain' indicates that the response content will be plain text (i.e., not HTML, JSON, or other formats).
  res.setHeader('Content-Type', 'text/plain');

  // res.end is used to end the response and send the actual data back to the client.
  // 'Hello World' is the data that will be sent back to the client as the response body. In this case, it’s a simple text message saying "Hello World".
  // After calling res.end(), the response is considered complete, and the server will send this data to the client (e.g., web browser) that made the request.
  res.end('Hello World');
});


// server.listen tells the server to start listening for incoming connections.
// port and hostname are the parameters that specify where the server should listen. In this case, the server will listen on 127.0.0.1:3000, which means it will listen on port 3000 on the local machine.
// The third argument is a callback function that will be executed once the server is successfully running and listening. This callback function logs a message to the console.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
















