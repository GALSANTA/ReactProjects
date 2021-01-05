require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');

function start() {
    
    server.use(bodyParser.json());
    server.use(allowCors);

    server.listen(process.env.PORT, function () {
        console.log("\x1b[32m", "Server is running on port " + process.env.PORT);
    });

}
function defineRoutes(routes) {
    server.use(routes);
}

module.exports = {
    start,
    defineRoutes
};