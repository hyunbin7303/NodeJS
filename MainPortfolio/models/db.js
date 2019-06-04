const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser: true}, (err)=> {

  if(!err) { console.log('MonggoDB Connection succeeded')}
  else { console.log('ERROR in DB Connection : ' + err)}
});

require('./home.model');
require('./employee.model');
require('./music.model');
