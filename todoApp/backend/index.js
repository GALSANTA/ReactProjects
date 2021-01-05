const server = require('./config/server');
server.start();
server.defineRoutes(require('./config/routes'));


