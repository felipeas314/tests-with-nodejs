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
        required: true
    },

    cpf: {
        type: String,
        required: true
    }
})

const customer = getConnection().model('Customer', customerSchema);

module.exports = customer;












