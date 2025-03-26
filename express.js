// This line imports the express module into your application. Express is a lightweight web framework for Node.js that simplifies the process of building web applications and APIs.
// The require('express') call loads the Express module, and the express function will be used to create an Express application.
const express = require('express');

// This line creates an Express application by calling express() and storing the result in the app constant.
// The app object represents the entire Express application and provides methods to define routes, middleware, and to start the server.
const app = express();

// app.get is a method that defines a route handler for the HTTP GET method.
// The first argument '/' is the URL path that this route handles. In this case, it handles the root path (http://localhost:3000/).
// The second argument is a callback function that will be executed when the server receives an HTTP GET request at the root path (/). This function takes two parameters:
// req (Request): Contains details about the incoming request, such as the URL, headers, and query parameters.
// res (Response): Used to send the response back to the client.
app.get('/', (req, res) => {

    // Inside the route handler, res.send is used to send the response to the client.
    // The argument 'Hello, this is a basic API!' is the response body that will be sent to the client when they access the root route (/).
    // res.send() can send various types of responses, such as text, JSON, or HTML, but here, it sends a simple text string as a response.  
  res.send('Hello, this is a basic API!');
});

// app.listen(3000) starts the Express server and tells it to listen for incoming requests on port 3000.
// The first argument (3000) is the port number where the server will be accessible. So, this means your server will run locally on http://localhost:3000.
// The second argument is a callback function that gets executed once the server is up and running. This function is commonly used for logging or other initialization tasks.
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});