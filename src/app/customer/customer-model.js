const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

const customer = mongoose.model('Customer', customerSchema);

module.exports = customer;











