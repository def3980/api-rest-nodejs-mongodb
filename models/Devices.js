var mongoose = require('mongoose');

var DeviceSchema = new mongoose.Schema({
    registrationId: String,
    deviceName: String,
    createdAt: String,
    updatedAt: String
});

mongoose.model('Device', DeviceSchema);