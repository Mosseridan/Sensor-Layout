const mongoose = require('mongoose');
const config = require('../config/database');
const utils = require('./utils');

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

module.exports.editManufacturer = function(manufacturer, callback) {
    Manufacturer.findByIdAndUpdate(manufacturer._id, { name: manufacturer.name }, callback);
}
