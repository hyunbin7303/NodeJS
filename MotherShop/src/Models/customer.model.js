let mongoose = require('mongoose');


const server = 'localhost:27017';
const database = 'todoDB';

mongoose.connect(`mongodb://${server}/${database}`,{ useNewUrlParser: true });
let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  }
});


module.exports = mongoose.model('Customer', CustomerSchema);
