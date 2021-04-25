const server = require('./src/config/express');

const mongoose = require('./src/config/mongoose')();

server.listen(3000,() => {
    console.log('UP!!!');
})


module.exports = server;