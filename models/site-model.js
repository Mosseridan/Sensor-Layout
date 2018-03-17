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
    if (!newSite.name) return callback('Cant add site. No name specified');
    // Does a site with this name already exist?
    Site.getSiteByName(newSite.name, (err, site) => {
        if (err) return callback(err);
        // If so return an err
        if (site) return callback('Cant add site. A site with this name already exists. (id: ' + site._id + ')')
        // If No parent site specified, save new site.
        if (!newSite.parentSite) return newSite.save(callback);          
        // Else get parent site
        Site.getSiteByName(newSite.parentSite, (err, parentSite) => {
            if (err) return callback(err);
            // If specified parent site does not exist, return an err
            if (!parentSite) return callback('Cant add site. Ivalid parent site specified.');
            // Else, change  new site's parent site to the parent sites actual id
            newSite.parentSite = parentSite._id;
            // Add the new site to the parent sites children
            parentSite.childSites.push(newSite._id);
            parentSite.save((err, parentSite) => {
                if (err) return callback(err);
                // Save new site
                newSite.save(callback);       
            })
        });
    });
}

module.exports.addGateway = function(newGateway, callback) {
    Site.updateOne({ _id: newGateway.site}, {$push: {'gateways': newGateway._id}}, (err, res) => {
        if (res.nModified == 0) return callback('No such site ' + newGateway.site);
        callback(null, res);        
    });  
}

module.exports.addChildSite = function(newSite, callback) {
    Site.updateOne({ name: newSite.parentSite}, {$push: {'childSites': newSite._id}}, (err, res) => {
        if (res.nModified == 0) return callback('No such site ' + newSite.parentSite);
        callback(null, res);        
    });    
}
