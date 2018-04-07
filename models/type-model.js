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

module.exports.getTypesByIds = function(ids, callback){
    Type.find({ _id: { $in : ids }}, callback)
}


module.exports.getTypeByName = function(name, callback){
    Type.findOne({'name': name}, callback);
}

module.exports.getAllTypes = function(callback){
    Type.find().exec(callback);
}

module.exports.addType = function(newType, onError, onSuccess) {
    utils.addDoc(Type, newType, 'type', onError, onSuccess);
}

module.exports.deleteType = function(id, callback) {
    const Sensor = require('./sensor-model');
    Sensor.findOne({ 'type': id}, (err, sensor) => {
          if (err) return callback(err);
          if (sensor) return callback('Type being used by sensor ' + sensor.name);
          Type.findByIdAndRemove(id, callback);
    });
}

module.exports.editType = function(type, callback) {
  Type.findByIdAndUpdate(type._id, { name: type.name }, callback);
}
