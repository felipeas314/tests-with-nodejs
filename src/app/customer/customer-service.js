const Customer = require('./customer-model');
const Response = require('../dto/Response');

async function createCustomer(customer) {

    // try {
    //     let response = new Response();
    //     console.log(response);

    // } catch (Err) {
    //     console.log(Err);
    // }

    const customerCreated = await Customer.create(customer);



    return customerCreated;
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