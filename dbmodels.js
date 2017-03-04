var mongoose = require('mongoose');
var mongodb = require('mongodb');

mongoose.connect('mongodb://localhost/myfirstapp');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('connected to db');
})

exports.default = db;

var todoSchema = mongoose.Schema({
  todo: 'String'
})

var Todo = mongoose.model('Todo', todoSchema, 'todos');

module.exports = {
  Todo
}