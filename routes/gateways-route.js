const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Gateway = require('../models/gateway-model');

// Add Gateway
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    
    const newGateway = new Gateway({
        'name': req.body.name,
        'type': req.body.type,
        'manufacturer': req.body.manufacturer,
        'site': req.body.site,
        'parentGateway': req.body.parentGateway,
        'subGateways': [],
        'sensors': [],
    });

    Gateway.addGateway(newGateway, (err, gateway) => {
        if (err) return res.json({ success: false , msg: 'Failed to add sensor: ' +  err });
        res.json({ success: true, gateway: gateway });
    });
       
});

module.exports = router;
