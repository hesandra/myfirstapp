var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Todo = require('./dbmodels').Todo;
//this is important for connection
var dbmodels = require('./dbmodels');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.listen(8000, function(){
  console.log('listening on port 8000')
});
app.use(express.static('public'));
app.get('/', function (req, res){
  res.send('index');
})

app.post('/todo', function(req, res){
  var todo = req.body.todo;
  var todo = new Todo({
    todo: todo
  })
  todo.save(function (err, todo){
    if (err) return console.error(err);
  })
  res.send(todo);
  res.end(); 
})

app.get('/todo', function(req, res){
  console.log('here')
  Todo.find({}, function(err, todo){
   if (err) console.error(err);
   res.send(todo);
   res.end();
   return
  })
})