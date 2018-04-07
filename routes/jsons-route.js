const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Site = require('../models/site-model');
const Sensor = require('../models/sensor-model');
const Rx = require('rxjs/Rx');
const Gateway = require('../models/gateway-model');

// Get All Sensors
router.get('/by-site', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Site.getAllSites((err, sites) => {
        if (err) return res.json({ success: false , msg: 'Failed to get all sites: ' +  err });
        let promises = sites.filter((site) => !site.parentSite)
        .map((site) => {
            return getSiteSubtreePromise(site, 
                sites.filter((otherSite) => otherSite != site));
        });
        Promise.all(promises).then(
            (sites) => {
                res.json({ success: true , data: {'sites': sites}})
            },
            (err) => {
                res.json({ success: false , msg: 'Failed to get layout by: ' +  err })
            }
        );

    });
});

function getSiteSubtreePromise(rootSite){
    let siteSubtree = {name: rootSite.name}
    return new Promise((resolve, reject) => {
        Gateway.getGatewaysByIds(rootSite.gateways, (err, gateways) => {
            if (err) return callback(err);
            siteSubtree.gateways = gateways;
            Sensor.getSensorsByIds(rootSite.sensors, (err, sensors) =>{
                if (err) return callback(err);
                siteSubtree.sensors = sensors; 
                if(rootSite.childSites.length > 0) {
                    Site.getSitesByIds(rootSite.childSites, (err, sites) => {
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

module.exports = router;