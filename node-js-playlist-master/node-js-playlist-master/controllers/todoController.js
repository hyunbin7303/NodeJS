var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todoDB', {useNewUrlParser:true},(err)=>{
  if(!err){
    console.log('monggoDB connection succeeded.');
  }
  else{
    console.log('Error in the mongo db database connection');
  }
});
var todoSchema = new mongoose.Schema({
  item: String
});
var Todo = mongoose.model('Todo', todoSchema);
var itemOne = Todo({item: 'buy Flowers'}).save(function(err)
{
  if(err) throw err;
  console.log('item saved into the db.');
});


var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended:false});




module.exports = function(app){

    app.get('/todo', function(req,res){


      // get dtaa from mongodb and pass it to view
      Todo.find({}, function(err,data){

      });
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser,function(req,res){
       data.push(req.body);
       res.json(data);
    });

    app.delete('/todo/:item', function(req,res){
      data = data.filter(function(todo){
        // This return statement returns true or false?
        return todo.item.replace(/ /g, '-') !== req.params.item;
      });
      res.json(data);
    });
};
