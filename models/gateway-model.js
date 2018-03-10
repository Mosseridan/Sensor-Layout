const mongoose = require('mongoose');
const config = require('../config/database');
const Site = require('./site-model');
const Sensor = require('./sensor-model');


// Gateway schema
const GatewaySchema = mongoose.Schema({
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
    site: {
        type: String,
        required: true
    },
    parentGateway: {
        type: String,
        required: false 
     },
    childGateways: {
        type: [String],//mongoose.Schema.Types.Mixed],
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

module.exports.addGateway = function(newGateway, callback) {
    Site.addGateway(newGateway, (err, site) => {
        if (err) return callback(err);
        if (!newGateway.parentGateway) return newGateway.save(callback);
        
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