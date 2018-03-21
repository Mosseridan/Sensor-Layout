const mongoose = require('mongoose');
const config = require('../config/database');
const Site = require('./site-model');
const Type = require('./type-model')
const Manufacturer = require('./manufacturer-model');

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
    utils.validateField(Gateway, newGateway.manufacturer, 'manufacturer', onError, (maufacturer) => {
        utils.validateFieldById(Site, newGateway.site, 'site', onError, (site) =>
            utils.validateFields(Protocol, newGateway.protocols, onError, () => {
                // If No parent gateway specified, save new gateway.    
                if (!newGateway.parentGateway) 
                    Site.addGateway(newGateway, onError, () =>
                        utils.addDoc(Gateway, newGateway, 'gateway', onError, onSuccess));
                // Else get parent gateway
                else
                    utils.validateFieldById(Gateway, newGateway.parentGateway, 'parent gateway', onError, (parentGateway) => 
                        Gateway.addChildGateway(newGateway, onError, () =>
                            utils.addDoc(Gateway, newGateway, 'gateway', onError, onSuccess)));   
            })
        );
    });
}


module.exports.addSensor = function(newSensor, onError, onSuccess) {
    Gateway.updateOne({ _id: newSensor.gateway}, {$push: {'sensors': newSensor._id}}, (err, res) => {
        if (res.nModified == 0) return onError('No such gateway ' + newSensor.gateway);
        onSuccess();
    });
}


module.exports.addChildGateway = function(newGateway, onError, onSuccess) {
    Gateway.updateOne({ _id: newGateway.parentGateway}, {$push: {'childGateways': newGateway._id}}, (err, res) => {
        if (res.nModified == 0) return onError('No such gateway ' + newGateway.parentGateway);
        onSuccess();
    });
}
