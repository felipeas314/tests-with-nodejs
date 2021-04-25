const mongoose = require('mongoose');

async function createConnectionMongoose() {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
            resolve();
        } catch (error) {
            console.log(error);
            reject();
        }
    });
}

module.exports = {
    createConnectionMongoose
}