'use strict';
var optimist = require('optimist');
var server = require('./').server;
var winston = require('winston');

var config = optimist
    .boolean(['dev'])
    .default({
        'mongo_uri': process.env.MONGO_URI || 'mongodb://localhost:27017/laweasyread',
        'port': process.env.PORT || 3000
    })
    .argv;

config.logger = [ winston.transports.Console ];

server.start(config);
