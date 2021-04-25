const { server } = require('./server');

const init = async () => {
    const s = await server();
    s.listen(3000);
}

init();