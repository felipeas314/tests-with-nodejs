const server = require('./config/express');

server.listen(3000,() => {
    console.log('UP!!!');
})


module.exports = server;