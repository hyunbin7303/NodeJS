const mongoose = require('mongoose');
var dailySchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'This field is required.'
  },
  date: {
    type:String,
    required: true
  },
  body: {
    type:String
  }
});

mongoose.model('Daily', dailySchema);