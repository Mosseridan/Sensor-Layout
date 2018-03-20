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
        // 'type': req.body.type,
        'manufacturer': req.body.manufacturer,
        'site': req.body.site,
        'parentGateway': req.body.parentGateway,
        'subGateways': [],
        'sensors': [],
    });

    Gateway.addGateway(newGateway, (err, gateway) => {
        if (err) return res.json({ success: false , msg: 'Failed to add gateway: ' +  err });
        res.json({ success: true, gateway: gateway });
    });

});

// Get All Gateways
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Gateway.getAllGateways((err, gateways) => {
        if (err) return res.json({ success: false , msg: 'Failed to get all gateways: ' +  err });
        res.json({ success: true, data: gateways });
    });
});

module.exports = router;
