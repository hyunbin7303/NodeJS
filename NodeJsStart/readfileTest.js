var fs = require('fs');
fs.readFile('readMe.txt', 'utf8', function(err,data)
  {
  console.log(data);
  fs.writeFile('hey.txt',data);
});
//fs.writeFileSync('writeSomething.txt',readMe);
fs.mkdirSync('kevinDirectory');

fs.mkdir('stuff', function(){
  fs.readFile('readMe.txt', 'utf8', function(err,data){

  })
})
