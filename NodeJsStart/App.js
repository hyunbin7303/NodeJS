var express = require('express');
var app = express(); // able to access
var bodyParser = require('body-parser');
var UrlencodedParser = bodyParser.urlencoded({extended: false});


app.set('view engine', 'ejs');
app.use('/assets',express.static('stuff'));
app.get('/', function(req,res){
    res.render('index');
});
app.get('/contact', function(req,res){
    console.log("kevin " + req.body);
    res.render('contact', {qs:req.query});
});
app.post('/contact', UrlencodedParser, function(req,res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});
app.get('/profile/:name', function(req,res){
  var data = {age: 28, job: 'software engineer', hobbies: ['breakdance', 'programming', 'something']};
  res.render('profile', {person: req.params.name, data:data});
});


app.listen(3000);
