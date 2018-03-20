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
        utils.validateFieldByName(Site, newGateway.site, 'site', onError, (site) => {
            newGateway.site = site._id;

            //TODO: VALIDATE PROTOCOLS

            // If No parent gateway specified, save new gateway.    
            if (!newGateway.parentGateway) Site.addGateway(site, newGateway, onError, 
                () => utils.addDoc(Gateway, newGateway, 'gateway', onError, onSuccess));
                
            // Else get parent gateway
            Gateway.getGatewayByName(newGateway.parentGateway, (err, parentGateway) => {
                if (err) return callback(err);
                // If specified parent gateway does not exist, return an err
                if (!parentGateway) return callback('Cant add gateway. Invalid parent gateway specified.');
                // Else, change  new gateway's parent gateway to the parent gateways actual id
                newGateway.parentGateway = parentGateway._id;
                // Add the new gateway to the site's gateways
                site.gateways.push(newGateway._id);
                // Add the new gateway to the parent gateways children
                parentGateway.childGateways.push(newGateway._id);

                parentGateway.save((err, parentGateway) => {
                    if (err) return callback(err);
                    // Save new gateway
                    newGateway.save(callback);
                });
            });
        });
    });
    
    
    
    
    if (!newGateway.name) return callback('Cant add gateway. No name specified');
    if (!newGateway.manufacturer) return callback('Cant add gateway. No manufacturer specified');
    if (!newGateway.site) return callback('Cant add gateway. No site specified');
    if (newGateway.protocols.length < 1) return callback('Cant add gateway. No protocols specified');

    // Does a gateway with this name already exist?
    Gateway.getGatewayByName(newGateway.name, (err, gateway) => {
        if (err) return callback(err);
        // If so return an err
        if (gateway) return callback('Cant add gateway. A gateway with this name already exists. (id: ' + gateway._id + ')')

        Manufacturer.getManufacturerByName(newGateway.manufacturer,(err, maufacturer) =>{
            if (err) return callback(err);
            // If specified type does not exist, return an err
            if (!maufacturer) return callback('Cant add gateway. Invalid manufacturer specified.');
            newGateway.manufacturer = maufacturer._id;

            Site.getSiteByName(newGateway.site,(err, site) =>{
                if (err) return callback(err);
                // If specified site does not exist, return an err
                if (!site) return callback('Cant add gateway. Invalid site specified.');
                newGateway.site = site._id;

                // TODO: ADD PROTOCOLS VEREFICATION

                // If No parent gateway specified, save new gateway.
                if (!newGateway.parentGateway) {
                site.gateways.push(newGateway._id);
                return newGateway.save(callback);
                }
                // Else get parent gateway
                Gateway.getGatewayByName(newGateway.parentGateway, (err, parentGateway) => {
                    if (err) return callback(err);
                    // If specified parent gateway does not exist, return an err
                    if (!parentGateway) return callback('Cant add gateway. Invalid parent gateway specified.');
                    // Else, change  new gateway's parent gateway to the parent gateways actual id
                    newGateway.parentGateway = parentGateway._id;
                    // Add the new gateway to the site's gateways
                    site.gateways.push(newGateway._id);
                    // Add the new gateway to the parent gateways children
                    parentGateway.childGateways.push(newGateway._id);

                    parentGateway.save((err, parentGateway) => {
                        if (err) return callback(err);
                        // Save new gateway
                        newGateway.save(callback);
                    });
                });
            });
        });
    });
}



module.exports.addSensor = function(newSensor, callback) {
    Gateway.updateOne({ _id: newSensor.gateway}, {$push: {'sensors': newSensor._id}}, (err, res) => {
        if (res.nModified == 0) return callback('No such gateway ' + newSensor.gateway);
        callback(null, res);
    });
}

module.exports.addChildGateway = function(newGateway, callback) {
    Gateway.updateOne({ _id: newGateway.parentGateway}, {$push: {'childGateways': newGateway._id}}, (err, res) => {
        if (res.nModified == 0) return callback('No such gateway ' + newGateway.parentGateway);
        callback(null, res);
    });
}
