const { createCustomer } = require('./customer-service');

const createCustomerController = async (req,res) => {
    await createCustomer(req.body);

    res.status(201).json({
        status: 'CREATED',
        date: new Date(),
        message: 'Customer created'
    })
}

module.exports = {
    createCustomerController
}