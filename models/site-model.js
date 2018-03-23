const mongoose = require('mongoose');
const config = require('../config/database');
const utils = require('./utils');

// Site schema
const SiteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gateways: {
        type: [utils.NamedObject],
        required: true
    },
    parentSite: {
        type: utils.NamedObject,
        required: false
    },
    childSites: {
        type: [utils.NamedObject],
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

module.exports.addSite = function(newSite, onError, onSuccess) {    
    // If No parent site specified, save new site.
    if (!newSite.parentSite) return utils.addDoc(Site, newSite, 'site', onError, onSuccess);          
    utils.validateField(Site, newSite.parentSite, 'paren site', onError, (parentSite) => 
        // Add the new site to the parent sites children
        Site.addChildSite(newSite, onError, 
            () => utils.addDoc(Site, newSite, 'site', onError, onSuccess))
    );
}


module.exports.addSensor = function(newSensor, onError, onSuccess) {
    Site.updateOne({ _id: newSensor.site._id }, {$push: {'sensors': newSensor}}, (err, res) => {
        if (res.nModified == 0) return onError('No such sensor ' + newSensor.site);
        onSuccess();        
    });  
}


module.exports.addGateway = function(newGateway, onError, onSuccess) {
    Site.updateOne({ _id: newGateway.site._id }, {$push: {'gateways': newGateway}}, (err, res) => {
        if (res.nModified == 0) return onError('No such site ' + newGateway.site);
        onSuccess();        
    });  
}

module.exports.addChildSite = function(newSite, onError, onSuccess) {
    Site.updateOne({ _id: newSite.parentSite._id }, {$push: {'childSites': newSite}}, (err, res) => {
        if (res.nModified == 0) return onError('No such site ' + newSite.parentSite);
        onSuccess();         
    });    
}
