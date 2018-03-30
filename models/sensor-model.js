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
        type: utils.NamedObject,
        required: true
    },
    manufacturer: {
       type: utils.NamedObject,
       required: true
    },
    protocols: {
        type: [utils.NamedObject],
        required: true
    },
    gateway: {
        type: utils.NamedObject,
        required: true
    },
    site: {
        type: utils.NamedObject,
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

module.exports.addSensor = function(newSensor, onError, onSuccess) {
    // let deleteOnError = (err) => {
    //     Sensor.remove({ _id: newSensor._id }, (rmErr)  => {
    //         if (rmErr) return onError(rmErr);
    //         onError(err);
    //     });
    // } 

    let deleteOnError = utils.getDeleteOnError(Sensor, newSensor, onError);

    utils.validateField(Type, newSensor.type, 'type', onError, (type) => 
        utils.validateField(Manufacturer, newSensor.manufacturer, 'manufacturer', onError, (maufacturer) => 
            utils.validateFields(Protocol, newSensor.protocols, 'protocol', onError, () =>
                utils.validateField(Gateway, newSensor.gateway, 'gateway', onError, () => 
                    utils.validateField(Site, newSensor.site, 'site', onError, () => 
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
