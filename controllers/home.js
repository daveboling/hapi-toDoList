/* global exports */

'use strict';

exports.index = function (request, reply) {
    reply('<h1>HOME</h1>');
};

exports.about = function (request, reply) {
    reply('About');
};

