const mongoose = require('mongoose');
const config = require('../config/database');
const utils = require('./utils');

// Protocol schema
const ProtocolSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Protocol = module.exports = mongoose.model('Protocol', ProtocolSchema);


module.exports.getProtocolById = function(id, callback){
    Protocol.findById(id, callback);
}

module.exports.getProtocolByName = function(name, callback){
    Protocol.findOne({'name': name}, callback);
}

module.exports.getAllProtocols = function(callback){
    Protocol.find().exec(callback);
}

module.exports.addProtocol = function(newProtocol, onError, onSuccess) {
    utils.addDoc(Protocol, newProtocol, 'protocol', onError, onSuccess);
}

module.exports.editProtocol = function(protocol, callback) {
  Protocol.findByIdAndUpdate(protocol._id, { name: protocol.name }, callback);
}

module.exports.deleteProtocol = function(id, callback) {
    const Gateway = require('./gateway-model');
    const Sensor = require('./sensor-model');
    Gateway.findOne({ 'protocols' : id }, (err, gateway) => {
        if (err) return callback(err);
        if (gateway) return callback('Protocol being used by gateway ' + gateway.name);
        Sensor.findOne({ 'protocols': id}, (err, sensor) => {
          if (err) return callback(err);
          if (sensor) return callback('Protocol being used by sensor ' + sensor.name);
          Protocol.findByIdAndRemove(id, callback);
        });
    });
}
