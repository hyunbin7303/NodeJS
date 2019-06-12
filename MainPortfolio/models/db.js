const mongoose = require('mongoose');
console.log("mongoDB connection checking.");
mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser: true}, (err)=> {

  if(!err) { console.log('MonggoDB Connection succeeded')}
  else { console.log('ERROR in DB Connection : ' + err)}
});

require('./daily.model');
require('./home.model');
require('./employee.model');
require('./music.model');
