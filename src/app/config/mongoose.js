const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://172.17.0.2/tests')
        .then( () => {
            console.log('Conectado ao MongoDB');
        })
}