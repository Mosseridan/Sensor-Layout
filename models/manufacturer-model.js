const mongoose = require('mongoose');
const config = require('../config/database');
const utils = require('./utils');
//const Gateway = require('./gateway-model');
//const Sensor = require('./sensor-model');

// Manufacturer schema
const ManufacturerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Manufacturer = module.exports = mongoose.model('Manufacturer', ManufacturerSchema);


module.exports.getManufacturerById = function(id, callback){
    Manufacturer.findById(id, callback);
}

module.exports.getManufacturerByName = function(name, callback){
    Manufacturer.findOne({'name': name}, callback);
}

module.exports.getAllManufacturers = function(callback){
    Manufacturer.find().exec(callback);
}

module.exports.addManufacturer = function(newManufacturer, onError, onSuccess) {
    utils.addDoc(Manufacturer, newManufacturer, 'manufacturer', onError, onSuccess);
}

module.exports.deleteManufacturer = function(id, callback) {
    const Gateway = require('./gateway-model');
    const Sensor = require('./sensor-model');
    Gateway.findOne({ 'manufacturer' : id }, (err, gateway) => {
        if (err) return callback(err);
        if (gateway) return callback('Manufcaturer being used by gateway ' + gateway.name);
        Sensor.findOne({ 'manufacturer': id}, (err, sensor) => {
          if (err) return callback(err);
          if (sensor) return callback('Manufactuer being used by sensor ' + sensor.name);
          Manufacturer.findByIdAndRemove(id, callback);
        });
    });
}

module.exports.editManufacturer = function(manufacturer, callback) {
    Manufacturer.findByIdAndUpdate(manufacturer._id, { name: manufacturer.name }, callback);
}
