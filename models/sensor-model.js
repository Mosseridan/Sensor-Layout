const mongoose = require('mongoose');
const config = require('../config/database');
const Site = require('./site-model');

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

module.exports.addSensor = function(newSensor, onError, onSuccess) {
    utils.validateField(Type, newSensor.type, 'type', onError, (type) => 
        utils.validateField(Maufacturer, newSensor.manufacturer, 'manufacturer', onError, (maufacturer) => 
            utils.validateFields(Protocol, newSensor.protocols, 'protocol', onError, () =>
                utils.validateFieldById(Gateway, newSensor.gateway, 'gateway', onError, (gateway) => 
                    utils.validateFieldById(Site, newSensor.site, 'site', onError, (site) => 
                        Gateway.addSensor(newSensor, onError, () =>
                            Site.addSensor(newSensor, onError, () =>
                                utils.addDoc(Sensor, newSensor, 'sensor', onError, onSuccess)
                            )
                        )
                    )
                )
            )
        )
    );
}
