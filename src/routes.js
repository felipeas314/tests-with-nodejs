const { Router } = require('express');



const routes = async () => {
    return new Promise((resolve, reject) => {
        const routes = new Router();

        const { health } = require('./health');
        const { createCustomerController } = require('./app/customer/customer-controller');

        routes.get('/health', health);
        
        routes.post('/customer',createCustomerController)

        resolve(routes);
    });
}

module.exports = {
    routes
}