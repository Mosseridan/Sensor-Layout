const mongoose = require('mongoose');
const config = require('../config/database');
const Type = require('./type-model')
const Manufacturer = require('./manufacturer-model');
const Site = require('./site-model');
const Protocol = require('./protocol-model');
const Sensor = require('./sensor-model');
const utils = require('./utils');

// Gateway schema
const GatewaySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    site: {
        type: String,
        required: true
    },
    protocols: {
        type: [String],
        required: true
    },
    parentGateway: {
        type: String,
        required: false
     },
    childGateways: {
        type: [String],
        required: true
    },
    sensors: {
        type: [String],
        required: true
    },
});

const Gateway = module.exports = mongoose.model('Gateway', GatewaySchema);


module.exports.getGatewayById = function(id, callback){
    Gateway.findById(id, callback);
}

module.exports.getGatewayByName = function(name, callback){
    Gateway.findOne({'name': name}, callback);
}

module.exports.getAllGateways = function(callback){
    Gateway.find().exec(callback);
}


module.exports.addGateway = function(newGateway, onError, onSuccess) {
    let deleteOnError = utils.getDeleteOnError(Gateway, newGateway, onError);

    utils.validateFieldById(Manufacturer, newGateway.manufacturer, 'manufacturer', onError, (maufacturer) =>
        utils.validateFieldById(Site, newGateway.site, 'site', onError, (site) =>
            utils.validateFields(Protocol, newGateway.protocols, 'protocol', onError, () => {
                // If No parent gateway specified, save new gateway.
                if (!newGateway.parentGateway) {
                    utils.addDoc(Gateway, newGateway, 'gateway', onError, (gateway) =>
                        Site.addGateway(newGateway, deleteOnError, onSuccess)
                    );
                }
                // Else get parent gateway
                else {
                    utils.validateFieldById(Gateway, newGateway.parentGateway, 'parent gateway', onError, (parentGateway) =>
                        utils.addDoc(Gateway, newGateway, 'gateway', onError, (gateway) =>
                            Site.addGateway(newGateway, deleteOnError, (gateway) =>
                                Gateway.addChildGateway(newGateway,
                                    (err) => Site.removeGateway(newGateway, deleteOnError, () => deleteOnError(err)),
                                    onSuccess
                                )
                            )
                        )
                    );
                }
            })
        )
    );
}


module.exports.editGateway = function(gateway, callback) {
  Gateway.findByIdAndUpdate(gateway._id,
    { name: gateway.name,
     manufacturer: gateway.manufacturer,
     site: gateway.site,
     protocols : gateway.protocols,
     parentGateway: gateway.parentGateway,
     childGateways : gateway.childGateways,
     sensors: gateway.sensors
     },
     callback);
}


module.exports.addSensor = function(newSensor, onError, onSuccess) {
    Gateway.updateOne({ _id: newSensor.gateway }, {$push: {'sensors': newSensor._id }}, (err, res) => {
        if (res.nModified == 0) return onError('No such gateway ' + newSensor.gateway);
        onSuccess(newSensor);
    });
}


module.exports.removeSensor = function(sensor, onError, onSuccess) {
    Gateway.updateOne({ _id: sensor.gateway }, {$pull: {'sensors': sensor._id }}, (err, res) => {
        if (res.nModified == 0) return onError('No such gateway ' + sensor.gateway);
        onSuccess();
    });
}

module.exports.addChildGateway = function(newGateway, onError, onSuccess) {
    Gateway.updateOne({ _id: newGateway.parentGateway }, {$push: {'childGateways': newGateway._id }}, (err, res) => {
        if (res.nModified == 0) return onError('No such gateway ' + newGateway.parentGateway);
        onSuccess(newGateway);
    });
}

module.exports.removeChildGateway = function(childGateway, onError, onSuccess) {
    Gateway.updateOne({ _id: childGateway.parentGateway }, {$pull: {'childGateways': childGateway._id }}, (err, res) => {
        if (res.nModified == 0) return onError('No such gateway ' + childGateway.parentGateway);
        onSuccess();
    });
}
