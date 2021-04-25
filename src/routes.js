const { Router } = require('express');



const routes = async () => {
    return new Promise((resolve, reject) => {
        const routes = new Router();

        const { health } = require('./health');

        routes.get('/health', health);
        console.log('qwer');

        resolve(routes);
    });
}

module.exports = {
    routes
}