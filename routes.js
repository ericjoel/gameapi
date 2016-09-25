server = module.parent.exports.server;
//controllers
var gameController = require('./controllers/gamesController');

// ------------ Game Routes ------------
server.get('/', gameController.get);
server.post('/', gameController.post);
// ------------ End Game Routes ------------ 
