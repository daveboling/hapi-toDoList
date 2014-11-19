
'use strict';

var Priority = require('../models/priority');

exports.create = function(request, reply){
    Priority.add(request.payload).then(function(priority){
        reply(priority);
    });
};


exports.show = function(request, reply){
    Priority.show(function(err, priorities){
        reply(priorities);
    });
};