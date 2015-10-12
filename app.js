var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose       = require('mongoose'),
    dbdml          = 'dml',
    devicesModel   = 'DevicesDmlModel',
    deviceCtrl     = 'DevicesDmlCtrl';

// Connection to DB
mongoose.connect('mongodb://localhost/' + dbdml, function (err, res) {
    if (err) {
        throw err;
    }
    console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
//var models     = require('./models/' + devicesModel)(app, mongoose);
//var TVShowCtrl = require('./controllers/' + deviceCtrl);

// Example Route
var router = express.Router();
router.get('/', function (req, res) {
    res.send("Hello world!");
});
app.use(router);

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

app.use('/api', tvshows);

// Start server
app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});