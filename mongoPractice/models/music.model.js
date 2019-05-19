const mongoose = require('mongoose');
var musicSchema = new mongoose.Schema({
  musicTitle: {
    type: String,
    required: 'This field is required.'
  },
  composer: {
    type:String
  },
  date: {
    type:String
  }
});

// Customer validation for email
/*
employeeSchema.path('email').validate((val) => {
  emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailRegex.test(val);
}, 'Invalid e-mail')
*/

mongoose.model('Music', musicSchema);
