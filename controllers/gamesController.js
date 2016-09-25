//Controlador de juegos
// /
//GET:
exports.get = function (req, res, next){
    res.send({'prueba' : 'Esta es una prueba'});
    return next();
}

//POST:
exports.post = function (req, res, next){
    res.send(201, { 'prueba' : 'esta es una respuesta' });
    return next();
}