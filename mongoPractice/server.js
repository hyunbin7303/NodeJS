console.log('Server Start.')
require('./models/db');

const express = require('Express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const fileupload = require('express-fileupload');
const fs = require('fs');
const mongodb = require('mongodb');
const binary = mongodb.Binary;
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

app.use('/employee', employeeController);
app.use('/music', musicController);
app.use(express.static('public'));
//app.use('/static', express.static(__dirname, '/uploadFiles.html'));
