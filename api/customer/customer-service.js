const Customer = require('./customer-model');

module.exports = {

    findAll: async (req, res) => {

        const customer = await Customer.find();

        res.status(200).json(customer);

    },

    create: async (req, res) => {

        const customer = await Customer.create(req.body);

        res.status(201).json(customer);
    }
}