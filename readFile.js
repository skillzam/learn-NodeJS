// This line imports the fs (File System) module, which is a built-in module in Node.js that allows you to interact with the file system.
const fs = require('fs');

// fs.readFile is a method from the fs module that allows you to read data from a file asynchronously.
// 'example.txt' is the file name that is read
// 'utf8' specifies the encoding to be used while reading the data (UTF-8 encoding is common for text files).
// The third argument is a callback function (err, data) that will be called once the file reading is complete:
// err is an error object that will contain any errors if something goes wrong while reading the file (e.g., if the file doesn't exist or there's a permission issue).
// data is the content of the file, which will be passed to this callback if the read operation is successful.
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});