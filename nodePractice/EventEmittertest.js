var Person =require('./lib/Person');
var kevin = new Person("Kevin Park");
var adam = new Person("Adam Sosnowski");

adam.on('speak', function(said){
    console.log(`${this.name}: ${said}`);
});


kevin.on('speak', function(said){

    console.log(`${this.name}: ${said}`);
});
kevin.emit('speak', "HELLO NODE JS EVENT EMITTER!.");
adam.emit('speak', "Hello i am adam.");