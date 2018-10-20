const mongoose = require('mongoose');
const config = require('../config/database');
const Type = require('./type-model');
const Manufacturer = require('./manufacturer-model');
const Protocol = require('./protocol-model');
const Gateway = require('./gateway-model');
const Site = require('./site-model');
const utils = require('./utils');

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
    protocols: {
        type: [String],
        required: true
    },
    gateway: {
        type: String,
        required: true
    },
    site: {
        type: String,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    }
});

const Sensor = module.exports = mongoose.model('Sensor', SensorSchema);


module.exports.getSensorById = function(id, callback){
    Sensor.findById(id, callback);
}

module.exports.getSensorsByIds = function(ids, callback){
    Sensor.find({ _id: { $in : ids }}, callback)
}


module.exports.getSensorByName = function(name, callback){
    Sensor.findOne({'name': name}, callback);
}

module.exports.getAllSensors = function(callback){
    Sensor.find().exec(callback);
}

module.exports.addSensor = function(newSensor, onError, onSuccess) {
    // let deleteOnError = (err) => {
    //     Sensor.remove({ _id: newSensor._id }, (rmErr)  => {
    //         if (rmErr) return onError(rmErr);
    //         onError(err);
    //     });
    // }

    let deleteOnError = utils.getDeleteOnError(Sensor, newSensor, onError);

    utils.validateFieldById(Type, newSensor.type, 'type', onError, (type) =>
        utils.validateFieldById(Manufacturer, newSensor.manufacturer, 'manufacturer', onError, (maufacturer) =>
            utils.validateFields(Protocol, newSensor.protocols, 'protocol', onError, () =>
                utils.validateFieldById(Gateway, newSensor.gateway, 'gateway', onError, () =>
                    utils.validateFieldById(Site, newSensor.site, 'site', onError, () =>
                        utils.addDoc(Sensor, newSensor, 'sensor', onError, (sensor) =>
                            Gateway.addSensor(newSensor, deleteOnError, (sensor) =>
                                Site.addSensor(newSensor,
                                    (err) => Gateway.removeSensor(newSensor, deleteOnError, () => deleteOnError(err)),
                                    onSuccess
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}

module.exports.editSensor = function(sensor, callback) {
  Sensor.findByIdAndUpdate(sensor._id,
    { name: sensor.name,
     type: sensor.type,
     manufacturer: sensor.manufacturer,
     protocols: sensor.protocols,
     gateway: sensor.gateway,
     site: sensor.site,
     longitude: sensor.longitude,
     latitude: sensor.latitude
    },
     callback);
}

module.exports.deleteSensor = function(id, callback) {
    Site.updateMany({}, {$pull: {'sensors': id }}, (err, res) => {
        if (err) return callback(err);
        Gateway.updateMany({}, {$pull: {'sensors': id }}, (err, res) => {
            if (err) return callback(err);
            Sensor.findByIdAndRemove(id, callback);
        });
    });
}
