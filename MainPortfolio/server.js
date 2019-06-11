console.log('Server Start.')
require('./models/db');
console.log('Server Start2.')
const express = require("express");
console.log('Server Start3.')
const path = require('path');
console.log('Server Start4.')
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const fileupload = require('express-fileupload');
const fs = require('fs');


const mongodb = require('mongodb');
const binary = mongodb.Binary;

console.log('Server Start5.')
const homeController = require('./controllers/homeController');
const employeeController = require('./controllers/employeeController');
const musicController = require('./controllers/musicController');
console.log('Controller setting Done');
var app = express();
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({extname:'hbs', defaultLayout: 'mainLayout', layoutDir:__dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
  console.info(`Express server started at port : ${PORT}`);
});

// need to fix later?
//var indexRouter = require('./routes/index');

app.use('/home', homeController);
app.use('/employee', employeeController);
app.use('/music', musicController);
app.use(express.static('public'));
