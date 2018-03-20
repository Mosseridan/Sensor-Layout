const mongoose = require('mongoose');
const config = require('../config/database');
const utils = require('./utils');

// Type schema
const TypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Type = module.exports = mongoose.model('Type', TypeSchema);

module.exports.getTypeById = function(id, callback){
    Type.findById(id, callback);
}

module.exports.getTypeByName = function(name, callback){
    Type.findOne({'name': name}, callback);
}

module.exports.getAllTypes = function(callback){
    Type.find().exec(callback);
}

module.exports.addType = function(newType, callback) {
    utils.addDoc(Type, newType, 'type', callback);
}
