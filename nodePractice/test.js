var stuff = require('./stuff');
console.log(stuff.counter(['kevin', 'park', 'hihihihi']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi, 5));



var events = require('events');
var util = require('util');
var Person = function(name) {
  this.name = name;
};



util.inherits(Person, events.EventEmitter);
var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('james');
var people = [james,mary,ryu];


people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(person.name + ' said: ' + msg);
  });
});

// speak event.
james.emit('speak', 'yoyoyoyo');
mary.emit('speak','I am maryyyyyyyyyyyyy');
