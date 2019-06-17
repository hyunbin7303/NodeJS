const mongoose = require('mongoose');
console.log("mongoDB connection checking.");
const uri = "mongodb+srv://hyunbin7303:asdf1234@cluster0-bvirm.mongodb.net/test";


mongoose.connect(uri, {useNewUrlParser: true}, (err)=> {

  if(!err) { console.log('MonggoDB Connection succeeded')}
  else { console.log('ERROR in DB Connection : ' + err)}
});

require('./daily.model');
require('./home.model');
require('./employee.model');
require('./music.model');
