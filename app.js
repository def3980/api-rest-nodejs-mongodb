// Importanciones
var express        = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose       = require('mongoose'),
    app            = express(); // Creando una app Express

// Cargando las rutas ya definidas
var devices = require('./routes/devices-router');

// Conectandose a MongoDB
var dbname = 'dmlMDB',
    conn   = 'mongodb://localhost:27017/' + dbname;

// Iniciando la conexion
mongoose.connect(conn, function (err, res) {
    if (err) {
        throw err;
        console.log('Error: ' + err);
    }
    // Indicando un mensaje de conexion
    console.log('Connected to Database');
});

// Configurando las respuestas que va a dar el servidor
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use('/api-dml', devices); // This is our route middleware

// exporto toda la configuracion
module.exports = app;

//var express        = require("express"),
//    app            = express(),
//    bodyParser     = require("body-parser"),
//    methodOverride = require("method-override"),
//    mongoose       = require('mongoose'),
//    dbdml          = 'dml',
//    devicesModel   = 'DevicesDmlModel',
//    deviceCtrl     = 'DevicesDmlCtrl';

// Connection to DB
//mongoose.connect('mongodb://localhost/' + dbdml, function (err, res) {
//    if (err) {
//        throw err;
//    }
//    console.log('Connected to Database');
//});

// Middlewares
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
//app.use(methodOverride());

// Import Models and controllers
//var models     = require('./models/' + devicesModel)(app, mongoose);
//var TVShowCtrl = require('./controllers/' + deviceCtrl);

// Example Route
//var router = express.Router();
//router.get('/', function (req, res) {
//    res.send("Hello world!");
//});
//app.use(router);

// API routes
//var tvshows = express.Router();
//
//tvshows
//    .route('/tvshows')
//    .get(TVShowCtrl.findAllTVShows)
//    .post(TVShowCtrl.addTVShow);
//
//tvshows
//    .route('/tvshow/:id')
//    .get(TVShowCtrl.findById)
//    .put(TVShowCtrl.updateTVShow)
//    .delete(TVShowCtrl.deleteTVShow);

//app.use('/api', tvshows);

// Start server
//app.listen(3000, function() {
//    console.log("Node server running on http://localhost:3000");
//});