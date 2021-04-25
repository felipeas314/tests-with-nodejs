const request = require('supertest');

describe('HEALTH', () => {

    const { server } = require('../../server');
    const URL_BASE = '/api/v1'
    let s = null;

    beforeAll(async () => {
        s = await server();
    });

    afterEach(() => {
        console.log('depois');
    });

    describe

    it('Cria cliente de maneira correta', async () => {

        const customer = {
            name: 'Alex',
            email: 'alex@alex.com',
            cpf: '12312312322'
        }

        const res = await request(s)
            .post(`${URL_BASE}/customer`)
            .send(customer);

        expect(res.status).toBe(201);

    });

    it('Cria cliente sem email e recebe Status 400', async () => {

        const customer = {
            name: 'Alex',
            cpf: '12312312322'
        }

        const res = await request(s)
            .post(`${URL_BASE}/customer`)
            .send(customer);

        expect(res.status).toBe(400);

    });

    it('Cria cliente sem email e recebe Status 400', async () => {

        const customer = {
            name: 'Alex',
            email: 'alex@alex.com'
        }

        const res = await request(s)
            .post(`${URL_BASE}/customer`)
            .send(customer);

        expect(res.status).toBe(400);

    });

    it('Cria cliente sem email e cpf e recebe Status 400', async () => {

        const customer = {
            name: 'Alex',
        }

        const res = await request(s)
            .post(`${URL_BASE}/customer`)
            .send(customer);

        expect(res.status).toBe(400);

    });

});

