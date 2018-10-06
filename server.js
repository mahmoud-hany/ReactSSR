const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        // Server Side Support for Clean URLs
        server.get('/p/:id', (req, res) => {
            const actualPage = '/post'
            const queryParams = { title: req.params.id } 
            app.render(req, res, actualPage, queryParams)
        });

        // * means Handle all routes 
        server.get('*', (req, res) => {
            return handle(req, res);
        });

        // Launch the server
        server.listen(3000, (err) => {
            if (err) throw err;
            console.log('http://localhost:3000');
        })
    })
    .catch((ex) => {
        console.log(ex.stack)
        process.exit(1);
    });