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

    it('Faz requisição para ver se a API está UP', async () => {

        const res = await request(s).get(`${URL_BASE}/health`);

        expect(res.status).toBe(200);

    });

});

