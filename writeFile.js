// This line imports the fs (File System) module, which is a built-in module in Node.js that allows you to interact with the file system.
const fs = require('fs');

// This line defines a constant data, which holds the string that you want to write to the file.
// The string 'Skillzam is a CURE Platform i.e Cross-Skill, Up-Skill, Re-Skill, Expert-Skill.' will be saved inside the file.
const data = 'Skillzam is a CURE Platform i.e Cross-Skill, Up-Skill, Re-Skill, Expert-Skill.';

// fs.writeFile is a method from the fs module that allows you to write data to a file asynchronously.
// 'output.txt' is the file name (if the file does not exist, it will be created; if it exists, it will be overwritten).
// data is the content we defined earlier that will be written to the file.
// 'utf8' specifies the encoding to be used while writing the data to the file (UTF-8 encoding is common for text files).
// The fourth argument is a callback function that Node.js will call once the file has been written. This callback receives an err parameter, which will contain any error that occurred during the write operation. If no error occurs, err will be null.
fs.writeFile('output.txt', data, 'utf8', (err) => {
  if (err) {
    console.log('Error writing to file:', err);
    return;
  }
  console.log('File has been written successfully!');
});