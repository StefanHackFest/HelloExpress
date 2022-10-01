let express = require('express');

let app = express();

app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.get('/ping', (request, response) => {
    response.send('Pong');
});

app.get('/add/:n1/:n2', (request, response) => {
    let {n1,n2} = request.params;

    response.send(`${Number(n1) + Number(n2)}`);
});

app.listen(3000, () => {
    console.log('Started listening on port 3000');
});