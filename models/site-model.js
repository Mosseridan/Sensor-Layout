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
    sensors: {
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
    let deleteOnError = utils.getDeleteOnError(Site, newSite, onError);
    
    if (!newSite.parentSite) return utils.addDoc(Site, newSite, 'site', onError, onSuccess);          
    utils.validateField(Site, newSite.parentSite, 'parent site', onError, (parentSite) => 
        utils.addDoc(Site, newSite, 'site', onError, () =>
            Site.addChildSite(newSite, deleteOnError, onSuccess)    
        )   
    );
}


module.exports.addSensor = function(newSensor, onError, onSuccess) {
    Site.updateOne({ _id: newSensor.site._id }, {$push: {'sensors': newSensor}}, (err, res) => {
        if (res.nModified == 0) return onError('No such site ' + newSensor.site);
        onSuccess();        
    });  
}

module.exports.removeSensor = function(sensor, onError, onSuccess) {
    Site.updateOne({ _id: sensor.site._id }, {$pull: {'sensors': sensor}}, (err, res) => {
        if (res.nModified == 0) return onError('No such site ' + sensor.site);
        onSuccess();        
    });  
}


module.exports.addGateway = function(newGateway, onError, onSuccess) {
    Site.updateOne({ _id: newGateway.site._id }, {$push: {'gateways': newGateway}}, (err, res) => {
        if (res.nModified == 0) return onError('No such site ' + newGateway.site);
        onSuccess();        
    });  
}


module.exports.removeGateway = function(gateway, onError, onSuccess) {
    Site.updateOne({ _id: gateway.site._id }, {$pull: {'gateways': gateway}}, (err, res) => {
        if (res.nModified == 0) return onError('No such site ' + gateway.site);
        onSuccess();        
    });  
}

module.exports.addChildSite = function(newSite, onError, onSuccess) {
    Site.updateOne({ _id: newSite.parentSite._id }, {$push: {'childSites': newSite}}, (err, res) => {
        if (res.nModified == 0) return onError('No such site ' + newSite.parentSite);
        onSuccess();         
    });    
}


module.exports.removeChildSite = function(childSites, onError, onSuccess) {
    Site.updateOne({ _id: childSites.site._id }, {$pull: {'childSites': childSites}}, (err, res) => {
        if (res.nModified == 0) return onError('No such site ' + childSites.site);
        onSuccess();        
    });  
}
