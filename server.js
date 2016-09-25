var restify = require('restify');

var server = restify.createServer({
    name: 'myapp',
    version: '1.0.0'
});
 
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

module.exports.server = server;

routes = require('./routes')

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});