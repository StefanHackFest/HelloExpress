let express = require('express');

let app = express();

app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.get('/ping', (request, response) => {
    response.send('Pong');
})

app.listen(3000, () => {
    console.log('Started listening on port 3000');
});