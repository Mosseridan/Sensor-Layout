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
    sensors: {
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

module.exports.addSite = function(newSite, onError, onSuccess) {
    let deleteOnError = utils.getDeleteOnError(Site, newSite, onError);

    if (!newSite.parentSite) return utils.addDoc(Site, newSite, 'site', onError, onSuccess);
    utils.validateFieldById(Site, newSite.parentSite, 'parent site', onError, (parentSite) =>
        utils.addDoc(Site, newSite, 'site', onError, (site) =>
            Site.addChildSite(newSite, deleteOnError, onSuccess)
        )
    );
}

module.exports.deleteSite = function(id, callback) {
    const Gateway = require('./gateway-model');
    const Sensor = require('./sensor-model');
    Site.findOne({ 'parentSite' : id }, (err, partentSite) => {
        if (err) return callback(err);
        if (partentSite) return callback('Site being used by another site as parent ' + partentSite.name);
        Gateway.findOne({ 'site' : id }, (err, gateway) => {
            if (err) return callback(err);
            if (gateway) return callback('Site being used by gateway ' + gateway.name);
            Sensor.findOne({ 'site': id}, (err, sensor) => {
            if (err) return callback(err);
            if (sensor) return callback('Site being used by sensor ' + sensor.name);
            Site.findByIdAndRemove(id, callback);
            });
        });
    });
}

module.exports.editSite = function(site, callback) {
  Site.findByIdAndUpdate(site._id, { name: site.name, gateways: site.gateways,
    parentSite: site.parentSite, childSites: site.childSites, sensors: site.sensors }, callback);
}

module.exports.addSensor = function(newSensor, onError, onSuccess) {
    Site.updateOne({ _id: newSensor.site }, {$push: {'sensors': newSensor._id}}, (err, res) => {
        if (res.nModified == 0) return onError('No such site ' + newSensor.site);
        onSuccess(newSensor);
    });
}

module.exports.removeSensor = function(sensor, onError, onSuccess) {
    Site.updateOne({ _id: sensor.site }, {$pull: {'sensors': sensor._id}}, (err, res) => {
        if (res.nModified == 0) return onError('No such site ' + sensor.site);
        onSuccess();
    });
}


module.exports.addGateway = function(newGateway, onError, onSuccess) {
    Site.updateOne({ _id: newGateway.site }, {$push: {'gateways': newGateway._id}}, (err, res) => {
        if (res.nModified == 0) return onError('No such site ' + newGateway.site);
        onSuccess(newGateway);
    });
}


module.exports.removeGateway = function(gateway, onError, onSuccess) {
    Site.updateOne({ _id: gateway.site }, {$pull: {'gateways': gateway._id}}, (err, res) => {
        if (res.nModified == 0) return onError('No such site ' + gateway.site);
        onSuccess();
    });
}

module.exports.addChildSite = function(newSite, onError, onSuccess) {
    Site.updateOne({ _id: newSite.parentSite }, {$push: {'childSites': newSite._id}}, (err, res) => {
        if (res.nModified == 0) return onError('No such site ' + newSite.parentSite);
        onSuccess(newSite);
    });
}


module.exports.removeChildSite = function(childSites, onError, onSuccess) {
    Site.updateOne({ _id: childSites.site }, {$pull: {'childSites': childSites._id}}, (err, res) => {
        if (res.nModified == 0) return onError('No such site ' + childSites.site);
        onSuccess();
    });
}
