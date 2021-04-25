const { server } = require('./server');

const init = async () => {
    server().then(s => {
        console.log('11111111');
        s.listen(3000);
    })
}

init();