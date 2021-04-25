const express = require('express');

const { createConnectionMongoose } = require('./app/database/mongoose');
const { routes } = require('./routes');


async function server() {
    return new Promise(async (resolve, reject) => {
        try {
            const s = express();

            await createConnectionMongoose();

            const r = await routes();
            s.use(express.json());
            s.use('/api/v1', r);

            resolve(s);
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = {
    server
}