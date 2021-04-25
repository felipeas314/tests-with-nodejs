const mongoose = require('mongoose');
var { Schema } = mongoose;

const { getConnection } = require('../database/mongoose');

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        require: true
    },

    cpf: {
        type: String,
        require: true
    }
})

const customer = getConnection().model('Customer', customerSchema);

module.exports = customer;












