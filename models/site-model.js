const mongoose = require('mongoose');
const config = require('../config/database');

// Site schema
const SiteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gateways: {
        type: [String],
        required: true
    },
    parentSite: {
        type: String,
        required: false
    },
    childSites: {
        type: [String],
        required: true
    },
});

const Site = module.exports = mongoose.model('Site', SiteSchema);


module.exports.getSiteById = function(id, callback){
    Site.findById(id, callback);
}

module.exports.getSiteByName = function(name, callback){
    Site.findOne({'name': name}, callback);
}

module.exports.getAllSites = function(callback){
    Site.find().exec(callback);
}

module.exports.addSite = function(newSite, callback) {
    if (!newSite.parentSite) return newSite.save(callback);
    Site.getSiteByName(newSite.parentSite, (err, parentSite) => {
        if (err) callback(err);
        if (!parentSite) callback('Cant add site. Ivalid parent site given.');
        newSite.parentSite = parentSite._id;
        newSite.save(callback);
    });
}

module.exports.addGateway = function(newGateway, callback) {
    Site.updateOne({ _id: newGateway.site}, {$push: {'gateways': newGateway._id}}, (err, res) => {
        if (res.nModified == 0) return callback('No such site ' + newGateway.site);
        callback(null, res);        
    });  
}

module.exports.addChildSite = function(newSite, callback) {
    Site.updateOne({ _id: newSite.parentSite}, {$push: {'childSites': newSite._id}}, (err, res) => {
        if (res.nModified == 0) return callback('No such site ' + newSite.parentSite);
        callback(null, res);        
    });    
}
