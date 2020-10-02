import Express from 'express';

let app = Express();

app.use(Express.json());

app.get('/ping', (request, response) => {
    response.send('pong');
});

app.get('/post', (request, response) => {
    response.json(request.body);
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Started listening on port ${process.env.PORT || 3000}`);
});