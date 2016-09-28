var Game = require('../models/game.js');
//Controlador de juegos
// /
//GET:
exports.get = function (req, res, next){    
    res.send({ 'prueba' : 'enrique' });
    return next();
}

//POST:
exports.post = function (req, res, next){
    var game = new Game();        
    game.initFromParams(req.params);
    res.send(201, { 'prueba' : game.name });
    return next();
}