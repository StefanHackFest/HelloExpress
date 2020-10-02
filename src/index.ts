import Express from 'express';

let app = Express();

app.listen(process.env.PORT || 3000, () => {
    console.log(`Started listening on port ${process.env.PORT || 3000}`);
});