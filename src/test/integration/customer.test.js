const request = require('supertest');

const server = require('../../init');

describe('/customer', () => {

    beforeEach(() => {
        console.log('antes');
    });

    afterEach(() => {
        console.log('depois');
    });

    describe('GET /', () => {
   
        it(' retorna todos os clientes', async () => {

            const res = await request(server).get('/customer');

            expect(res.status).toBe(200);

        });

    })

    
});

