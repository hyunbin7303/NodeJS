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

mongoose.model('Music', musicSchema);
