const { Router } = require('express');
const asyncHandler = require('express-async-handler')
const validationErrorsMiddleware = require('./app/middlewares/validation-errors');

const routes = async () => {
    return new Promise((resolve, reject) => {
        const routes = new Router();

        const { health } = require('./health');
        const { createCustomerController } = require('./app/customer/customer-controller');

        routes.get('/health', health);
        
        routes.post('/customer',asyncHandler(createCustomerController));

        routes.use(validationErrorsMiddleware);

        resolve(routes);
    });
}

module.exports = {
    routes
}