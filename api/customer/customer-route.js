const customerSerice = require('./customer-service');

module.exports = server => {

    const SERVICE = '/customer';

    server.get(`${SERVICE}`,customerSerice.findAll);

    server.post(`${SERVICE}`,customerSerice.create);
}