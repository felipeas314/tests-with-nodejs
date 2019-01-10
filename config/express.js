let express = require('express');

let server = express();

server.use(express.json());

require('./routes')(server);

module.exports = server;