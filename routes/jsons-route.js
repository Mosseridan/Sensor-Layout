const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Site = require('../models/site-model');
const Sensor = require('../models/sensor-model');
const Rx = require('rxjs/Rx');
const Gateway = require('../models/gateway-model');
const Protocol = require('../models/protocol-model');
const Manufacturer = require('../models/manufacturer-model');

// Get the layout by site 
router.get('/by-site/:siteId', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let query = {};
    if (req.params.siteId == 'undefined') query.parentSite = null;
    else query._id = req.params.siteId;
    Site.find(query, (err, sites) => {
        if (err) return res.json({ success: false , msg: 'Failed to get all sites: ' +  err });
        let promises = sites.map((site) => {
            return getSiteSubtreePromise(site);
        });
        Promise.all(promises).then(
            (sites) => {
                res.json({ success: true , data: {'sites': sites}})
            },
            (err) => {
                res.json({ success: false , msg: 'Failed to get layout by site: ' +  err })
            }
        );

    });
});

function getSiteSubtreePromise(rootSite){
    let siteSubtree = {name: rootSite.name}
    return new Promise((resolve, reject) => {
        Gateway.getGatewaysByIds(rootSite.gateways, (err, gateways) => {
            if (err) return reject(err);
            siteSubtree.gateways = gateways;
            Sensor.getSensorsByIds(rootSite.sensors, (err, sensors) =>{
                if (err) return reject(err);
                siteSubtree.sensors = sensors; 
                if(rootSite.childSites.length > 0) {
                    Site.getSitesByIds(rootSite.childSites, (err, sites) => {
                        if (err) return reject(err);
                        siteSubtree.childSites = sites;
                        let promises = siteSubtree.childSites.map((site) => {
                            return getSiteSubtreePromise(site); 
                        });
                        Promise.all(promises).then(
                            (sites) => {
                                siteSubtree.childSites = sites;
                                resolve(siteSubtree);
                            },
                            (err) => {
                                reject(err);
                            }
                        ); 
                    });
                } 
                else {
                    siteSubtree.childSites = [];
                    resolve(siteSubtree);
                }
            });
        });
    });
}

// Get the layout by gateway 
router.get('/by-gateway/:gatewayId', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    let query = {};
    if (req.params.gatewayId == 'undefined') query.parentSite = null;
    else query._id = req.params.gatewayId;
    Gateway.find(query, (err, gateways) => {
        if (err) return res.json({ success: false , msg: 'Failed to get all gateways: ' +  err });
        let promises = gateways.map((gateway) => {
            return getGatewaySubtreePromise(gateway);
        });
        Promise.all(promises).then(
            (gateways) => {
                res.json({ success: true , data: {'gateways': gateways}})
            },
            (err) => {
                res.json({ success: false , msg: 'Failed to get layout by gateway: ' +  err })
            }
        );

    });
});

function getGatewaySubtreePromise(rootGateway){
    let gatewaySubtree = {name: rootGateway.name}
    return new Promise((resolve, reject) => {
        Manufacturer.getManufacturerById(rootGateway.manufacturer, (err, manufacturer) => {
            if (err) return reject(err);
            gatewaySubtree.manufacturer = manufacturer;
            Site.getSiteById(rootGateway.site, (err, site) => {
                if (err) return reject(err);
                gatewaySubtree.site = site;
                Protocol.getProtocolsByIds(rootGateway.protocols, (err, protocols) => {
                    if (err) return reject(err);
                    gatewaySubtree.protocols = protocols;
                    Sensor.getSensorsByIds(rootGateway.sensors, (err, sensors) => {
                        if (err) return reject(err);
                        gatewaySubtree.sensors = sensors;
                        if(rootGateway.childGateways.length > 0) {
                            Gateway.getGatewaysByIds(rootGateway.childGateways, (err, gateways) => {
                                if (err) return reject(err);
                                gatewaySubtree.childGateways = gateways;
                                let promises = gatewaySubtree.childGateways.map((gateway) => {
                                    return getGatewaySubtreePromise(gateway); 
                                });
                                Promise.all(promises).then(
                                    (gateways) => {
                                        gatewaySubtree.childGateways = gateways;
                                        resolve(gatewaySubtree);
                                    },
                                    (err) => {
                                        reject(err);
                                    }
                                );    
                            });
                        }
                        else {
                            gatewaySubtree.childGateways = [];
                            resolve(gatewaySubtree);
                        }
                    });
                });
            });       
        });
    });
}

module.exports = router;