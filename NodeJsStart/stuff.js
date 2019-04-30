var counter = function(arr){
  return 'THERE are ' + arr.length + ' elements in this array.';
};
var adder = function(a,b){
  return `The sum of the 2 numbers is ${a+b}`;
};
var pi = 3.1425;


module.exports = {
  counter : counter,
  adder: adder,
  pi : pi
};


var events = require('events');
var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function(msg){
  console.log(msg);
});
myEmitter.emit('someEvent', 'The event was emitted.');
