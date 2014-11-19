var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Scheme definition
var schema = new mongoose.Schema({
    name: String,
    due: Date,
    priority: {
        type: Schema.Types.ObjectId,
        ref: 'priority'
    },
    isComplete: Boolean,
    tags: [String]
});

//Model definition
var Task = mongoose.model('Task', schema);

Task.all = function(cb){
    Task.find(function(err, tasks){
        require('./priority').populate(tasks, {path: 'priority'}, cb);
    });
};

Task.add = function(o){
    return Task.create(o);
};

Task.update = function(id, updatedInfo, cb){
    Task.findByIdAndUpdate(id, updatedInfo, cb);
};

Task.findTask = function(id, cb){
    Task.findById(id, function(err, task){
        require('./priority').populate(task, {path: 'priority'}, cb);
    });
};

Task.removeTask = function(id, cb){
    Task.remove({_id: id}, cb);
};

module.exports = Task;