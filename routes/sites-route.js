const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Site = require('../models/site-model');

// Add Site
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    
    const newSite = new Site({
        'name': req.body.name,
        'gateways': [],
        'parentSite': req.body.parentSite,
        'childSites': [],
    });

    Site.addSite(newSite, (err, site) => {
        if (err) return res.json({ success: false , msg: 'Failed to add site: ' +  err });
        res.json({ success: true, data: site });
    });
       
});

// Get All Sites
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Site.getAllSites((err, sites) => {
        if (err) return res.json({ success: false , msg: 'Failed to get all sites: ' +  err });
        res.json({ success: true, data: sites });
    });      
});


module.exports = router;