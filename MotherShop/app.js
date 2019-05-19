
console.log('Application Startsssssss');

const express = require('express');
const app = express();

console.log('Application Start.');
app.use((req,res,next)=>{
  res.status(200).json({
    message: 'It works.'
  });
});


module.exports = app;
