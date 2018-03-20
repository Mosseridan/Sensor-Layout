const mongoose = require('mongoose');
const config = require('../config/database');

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

module.exports.addManufacturer = function(newManufacturer, callback) {
    if (!newManufacturer.name) return callback('Cant add manufacturer. No name specified');
    Manufacturer.findOne({'name': newManufacturer.name}, (err, manufacturer)=>{
        if (err) return callback(err);
        if (manufacturer) return callback('Cant add manufacturer. A manufacturer with this name already exists. (id: ' + manufacturer._id + ')');
       newManufacturer.save(callback);
    });
}
