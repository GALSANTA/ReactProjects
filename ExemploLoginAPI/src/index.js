const process = require('process');
const api = require('./api');
const routes = require('./routes');

if (hasParam("--production")) {

    console.log('\x1b[32m%s\x1b[0m', "INICIANDO O MODO DE PRODUÇÃO");
    console.log("");
    api.start();
    api.defineRoutes(routes);

} else if (hasParam("--development")) {
 
    console.log('\x1b[34m%s\x1b[0m', "INICIANDO O MODO DE DESENVOLVIMENTO");
    console.log("");
    api.start();
    api.defineRoutes(routes);

} else {

    throw new Error("MODO DE INICIALIZAÇÃO INVÁLIDO").stack;
}

function hasParam(param) {
    return process.argv.indexOf(param) !== -1;
}