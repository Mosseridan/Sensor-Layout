const mongoose = require('mongoose');
const config = require('../config/database');

// Type schema
const TypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    kind: {
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

module.exports.getTypeByNameAndKind = function(name, kind, callback){
    Type.findOne({'name': name, 'kind': kind}, callback);
}


module.exports.getTypesByKind = function(kind, callback){
    Type.find({'kind': kind}, callback);
}

module.exports.getAllTypes = function(callback){
    Type.find().exec(callback);
}

module.exports.addType = function(newType, callback) {
    if (!newType.name) return callback('Cant add type. No name specified');
    if (!newType.kind) return callback('Cant add type. No kind specified');
    Type.find({'name': newType.name, 'kind': newType.kind}, (err, type)=>{
        if (err) return callback(err);
        if (type) return callback('Cant add type. A type with this name and kind already exists. (id: ' + type._id + ')');
        newType.save(callback);
    });
}


// function validateFields(type, callback){
//     if (type.name == '') return callback('Cant add type. No name specified');
// }