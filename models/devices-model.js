var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var devicesSchema = new Schema({
    registrationId : String,
    deviceName     : String,
    createdAt      : String,
    updatedAt      : String
});

module.exports = mongoose.model('Devices', devicesSchema);