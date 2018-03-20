const mongoose = require('mongoose');
const config = require('../config/database');

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

module.exports.addProtocol = function(newProtocol, callback) {
    if (!newProtocol.name) return callback('Cant add protocol. No name specified');
    Protocol.findOne({'name': newProtocol.name}, (err, protocol)=>{
        if (err) return callback(err);
        if (protocol) return callback('Cant add protocol. A protocol with this name already exists. (id: ' + protocol._id + ')');
       newProtocol.save(callback);
    });
}
