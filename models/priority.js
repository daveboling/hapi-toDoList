//var db = process.env.DB;
var mongoose = require('mongoose');

//mongoose.connect(db);

var schema = new mongoose.Schema({name: String, color: String});
var Priority = mongoose.model('Priority', schema);

Priority.add = function(obj){
  return Priority.create(obj);
};

Priority.show = function(cb){
    Priority.find({}, cb);
};

module.exports = Priority;