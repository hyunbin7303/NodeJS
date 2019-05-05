let mongoose = require('mongoose');


const server = 'localhost:3000';
const database = 'VividlyDB';

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
