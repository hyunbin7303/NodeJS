

var time = 0;
var timer = setInterval(function(){
  time += 1;
  console.log(time +' seconds have passed.');
  if(time > 5){
    clearInterval(timer);
  }
},2000);




console.log(__dirname);
console.log(__filename);
function callFunction(fun){
  fun();
}

//fucntion expression
var sayBye =function(){
  console.log('byee');
};

callFunction(sayBye);
