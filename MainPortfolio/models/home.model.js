const mongoose = require('mongoose');
var homeSchema = new mongoose.Schema({
  fullName: {
    type:String,
    required: 'This field is required.'
  },
  email: {
    type:String
  },
  mobile: {
    type:String
  },
  city: {
    type: String
  }
});

// Customer validation for email
homeSchema.path('email').validate((val) => {
  emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailRegex.test(val);
}, 'Invalid e-mail')


mongoose.model('Home', homeSchema);
