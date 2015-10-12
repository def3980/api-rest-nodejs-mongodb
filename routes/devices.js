var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Device = mongoose.model('Device');
var util = require('./../utils/datetime');

// + ------------------------------------------------------------- DEVICES -- +
// | Realizado: Lun, 12 Oct 2015 13:04:58                                     |
// | Por: Oswaldo Rojas                                                       |
// + ------------------------------------------------------------------------ +
router
    .get('/devices', function (req, res, next) {
        console.log('>> ' + util.dtshort(new Date()) + ' :: GET:/devices --> entrando a la función');
        Device.find(function (err, device) {
            if (err) {
                console.log('>> ' + util.dtshort(new Date()) + ' :: GET:/devices --> un error ocurrió ~ ' + err);
                return next(err);
            }
            console.log('>> ' + util.dtshort(new Date()) + ' :: GET:/devices --> mostrando resultados');
            res.jsonp(device);
        });
    })
    .post('/devices', function (req, res, next) {
        console.log('>> ' + util.dtshort(new Date()) + ' :: POST:/devices --> entrando a la función');
        var device = new Device(req.body);
        console.log('>> ' + util.dtshort(new Date()) + ' :: POST:/devices --> guardando en memoria los parametros recibidos ~ ' + JSON.stringify(req.body, null, 2));
        device.createdAt = util.dtshort(new Date());
        device.updatedAt = null;
        device.save(function (err, device) {
            if (err) {
                console.log('>> ' + util.dtshort(new Date()) + ' :: POST:/devices --> un error ocurrió ~ ' + err);
                return next(err);
            }
            console.log('>> ' + util.dtshort(new Date()) + ' :: POST:/devices --> mostrando resultados');
            res.jsonp(device);
        });
    })
    .get('/devices/:_id', function (req, res, next) {
        console.log('>> ' + util.dtshort(new Date()) + ' :: GET:/devices/:_id --> entrando a la función');
        Device.findById(req.params._id, function (err, device) {
            if (err) {
                console.log('>> ' + util.dtshort(new Date()) + ' :: GET:/devices/:_id --> un error ocurrió ~ ' + err);
                return next(err);
            }
            
            console.log('>> ' + util.dtshort(new Date()) + ' :: GET:/devices/:_id --> mostrando resultados');
            res.jsonp(device);
        });
    })
    .put('/devices/:_id', function (req, res, next) {
        console.log('>> ' + util.dtshort(new Date()) + ' :: PUT:/devices/:_id --> entrando a la función');
        Device.findById(req.params._id, function (err, device) {
            if (err) {
                console.log('>> ' + util.dtshort(new Date()) + ' :: PUT:/devices/:_id --> un error ocurrió ~ ' + err);
                return next(err);
            }
            
            console.log('>> ' + util.dtshort(new Date()) + ' :: PUT:/devices:/:_id --> actualizo los parametros recibidos ~ ' + JSON.stringify(req.body, null, 2));
            console.log('>> ' + util.dtshort(new Date()) + ' :: PUT:/devices:/:_id --> iterando los parametros recibidos');
            for (var key in req.body) {
                if (req.body.hasOwnProperty(key)) {
                    item = req.body[key];
                    device[key] = item;
                    console.log('>> ' + util.dtshort(new Date()) + ' :: ' + key + ' => ' + item);
                }
            }
            console.log('>> ' + util.dtshort(new Date()) + ' :: PUT:/devices/:_id --> actualizando los datos');
            device.updatedAt = util.dtshort(new Date());
            device.save(function (err, device) {
                if (err) {
                    console.log('>> ' + util.dtshort(new Date()) + ' :: PUT:/devices/:_id --> un error ocurrió ~ ' + err);
                    return next(err);
                }
                console.log('>> ' + util.dtshort(new Date()) + ' :: PUT:/devices/:_id --> mostrando resultados');
                res.jsonp({'mesage':'registro actualizado correctamente...'});
            });
        });
    })
    .delete('/devices/:_id', function (req, res, next) {
        console.log('>> ' + util.dtshort(new Date()) + ' :: DELETE:/devices/:_id --> entrando a la función');
        Device.remove({ _id : req.params._id }, function (err, device) {
            if (err) {
                console.log('>> ' + util.dtshort(new Date()) + ' :: DELETE:/devices/:_id --> un error ocurrió ~ ' + err);
                return next(err);
            }
            console.log('>> ' + util.dtshort(new Date()) + ' :: DELETE:/devices/:_id --> mostrando resultados');
            res.jsonp({'mesage':'registro eliminado correctamente...'});
        });
    });
// + --------------------------------------------------------- FIN DEVICES -- +

module.exports = router;