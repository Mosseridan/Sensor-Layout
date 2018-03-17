const mongoose = require('mongoose');
const config = require('../config/database');

// Sensor schema
const SensorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    manufacturer: {
       type: String,
       required: true 
    },
    protocol: {
        type: String,
        required: true
    },
    gateway: {
        type: String,
        required: true
    },
    site: {
        type: String,
        required: true 
    }
});

const Sensor = module.exports = mongoose.model('Sensor', SensorSchema);


module.exports.getSensorById = function(id, callback){
    Sensor.findById(id, callback);
}

module.exports.getSensorByName = function(name, callback){
    Sensor.findOne({'name': name}, callback);
}

module.exports.addSensor = function(newSensor, callback){
    Site.getSiteById(newSensor.site, (err, site) => {
        if (err) return callback(err);
        if (!site) return callback('No such site' + newSensor.site);
        Gateway.addSensor(newSensor, (err, res) => {
            if (err) return callback(err);
            newSensor.save(callback)
        });
    });
}
