const express = require('express');

const { createConnectionMongoose } = require('./app/database/mongoose');

async function server() {
    return new Promise(async (resolve, reject) => {
        const s = express();

        await createConnectionMongoose();

        s.use(express.json());

        return s;
    });
}

module.exports = {
    server
}