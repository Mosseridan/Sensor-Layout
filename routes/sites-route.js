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
        'subSites': [],
    });

    Gateway.addSite(newSite, (err, gateway) => {
        if (err) return res.json({ success: false , msg: 'Failed to add site: ' +  err });
        res.json({ success: true, gateway: gateway });
    });
       
});

module.exports = router;