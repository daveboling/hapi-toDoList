'use strict';
var Task = require('../models/task');

exports.all = function(request, reply){
    Task.all(function(err, tasks){
        reply(tasks);
    });
};

exports.create = function(request, reply){
    Task.add(request.payload).then(function(){
        reply('success');
    });
};

exports.update = function(request, reply){
    Task.update(request.params.id, request.payload, function(err, task){
        reply(task);
    });
};
exports.remove = function(request, reply){
    Task.removeTask(request.params.id, function(){
        reply('removed task');
    });
};

exports.show = function(request, reply){
    Task.findTask(request.params.id, function(err, task){
        reply(task);
    });
};