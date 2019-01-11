const server = require('./config/express');

const mongoose = require('./config/mongoose')();

server.listen(3000,() => {
    console.log('UP!!!');
})


module.exports = server;