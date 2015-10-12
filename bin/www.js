// Se requiere el archivo app.js
var app = require('../app');

// configurando el puerto de salida de los Servicios REST
app.set('port', process.env.PORT || 8080);

// aplicando la configuracion y un mensaje de consola
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port: ' + server.address().port);
});