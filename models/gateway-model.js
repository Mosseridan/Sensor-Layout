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
        type: utils.NamedObject,
        required: true
    },
    site: {
        type: utils.NamedObject,
        required: true
    },
    protocols: {
        type: [utils.NamedObject],
        required: true
    },
    parentGateway: {
        type: utils.NamedObject,
        required: false
     },
    childGateways: {
        type: [utils.NamedObject],
        required: true
    },
    sensors: {
        type: [utils.NamedObject],
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
    utils.validateField(Manufacturer, newGateway.manufacturer, 'manufacturer', onError, (maufacturer) => 
        utils.validateField(Site, newGateway.site, 'site', onError, (site) =>
            utils.validateFields(Protocol, newGateway.protocols, 'protocol', onError, () => {
                // If No parent gateway specified, save new gateway.    
                if (!newGateway.parentGateway) 
                    Site.addGateway(newGateway, onError, () =>
                        utils.addDoc(Gateway, newGateway, 'gateway', onError, onSuccess));
                // Else get parent gateway
                else
                    utils.validateField(Gateway, newGateway.parentGateway, 'parent gateway', onError, (parentGateway) => 
                        Site.addGateway(newGateway, onError, () =>    
                            Gateway.addChildGateway(newGateway, onError, () =>
                                utils.addDoc(Gateway, newGateway, 'gateway', onError, onSuccess))));   
            })
        )
    );
}


module.exports.addSensor = function(newSensor, onError, onSuccess) {
    Gateway.updateOne({ _id: newSensor.gateway._id }, {$push: {'sensors': newSensor }}, (err, res) => {
        if (res.nModified == 0) return onError('No such gateway ' + newSensor.gateway);
        onSuccess();
    });
}


module.exports.addChildGateway = function(newGateway, onError, onSuccess) {
    Gateway.updateOne({ _id: newGateway.parentGateway._id }, {$push: {'childGateways': newGateway }}, (err, res) => {
        if (res.nModified == 0) return onError('No such gateway ' + newGateway.parentGateway);
        onSuccess();
    });
}
