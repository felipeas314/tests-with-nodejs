const Customer = require('./customer-model');

async function createCustomer(customer) {
    const customerCreates = await Customer.create(customer);
}

async function index(page, size) {

}

async function findById(id) {

}

async function update(id, customer) {

}

async function destroy(id) {

}

module.exports = {
    createCustomer
}