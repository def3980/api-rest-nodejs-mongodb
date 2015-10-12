var Devices  = require('../models/devices-model'),
    express = require('express'),
    router  = express.Router();

// + ------------------------------------- SELECT +
// Muestra todas los dispositivos moviles creados
router
    .route('/devices')
    .get(function (req, res) {
        Devices.find(function (err, movies) {
            if (err) {
                return res.send(err);
            }

            res.json(movies);
        });
    });

// Muestra un solo dispositivo movil asociado a un identificador
router
    .route('/devices/:id')
    .get(function (req, res) {
        Devices.findOne({ _id: req.params.id }, function (err, device) {
            if (err) {
                return res.send(err);
            }

            res.json(device);
        });
    });
// + -------------------------------- FIN SELECT +

// + -------------------------------------- CRUD +
// Inserta un nuevo dispositivo movil
router
    .route('/devices')
    .post(function (req, res) {
        var device = new Movies(req.body);
        device.save(function (err) {
            if (err) {
                return res.send(err);
            }

            res.send({ message: 'Se agrego un dispositivo movil' });
        });
    });

// Actualizando un dispositivo
router
    .route('/devices/:id')
    .put(function (req, res) {
        Devices.findOne({ _id: req.params.id }, function (err, device) {
            if (err) {
                return res.send(err);
            }

            for (prop in req.body) {
                device[prop] = req.body[prop];
            }

            // guardando el dispositivo
            device.save(function (err) {
                if (err) {
                    return res.send(err);
                }

                res.json({ message: 'Se actualizo el dispositivo movil' });
            });
        });
    });

// Eliminando un dispositivo
router
    .route('/devices/:id')
    .delete(function (req, res) {
        Devices.remove({ _id: req.params.id }, function (err, device) {
            if (err) {
                return res.send(err);
            }

            res.json({ message: 'Dispositivo movil eliminado exitosamente' });
        });
    });
// + ----------------------------------- FIN CRUD +

// Exportando las rutas creadas
module.export = router;