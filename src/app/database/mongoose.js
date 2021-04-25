const mongoose = require('mongoose');

let connection; 

async function createConnectionMongoose() {
    return new Promise(async (resolve, reject) => {
        try {
            connection = await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
            resolve();
        } catch (error) {
            console.log(error);
            reject();
        }
    });
}

function getConnection(){
    return connection;
}

module.exports = {
    createConnectionMongoose,
    getConnection
}