// Asynchronous prog is a design pattern which ensures the non-blocking code execution
// Asynchronous programming is great for faster execution of programs button, but it comes with price


var fs = require("fs");
var fileContent = fs.readFileSync('sync.js', 'utf8');
console.log(fileContent);
console.log("Something else");
