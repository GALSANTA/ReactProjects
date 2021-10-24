const express = require('express');
const bodyParser = require('body-parser');

let app;

function start() {
    
    app = express();

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({extended:false}));
    
    app.listen(3000);

    console.log('Server rodando na porta', 3000);
}

function defineRoutes(Router) {
    app.use(Router);
}
module.exports = {
    start, 
    defineRoutes
}