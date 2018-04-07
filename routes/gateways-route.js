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
        'manufacturer': req.body.manufacturer,
        'site': req.body.site,
        'protocols': req.body.protocols,
        'parentGateway': req.body.parentGateway,
        'subGateways': [],
        'sensors': [],
    });

    Gateway.addGateway(newGateway,
        (err) => { // onError
            console.log(err);
            res.json({ success: false , msg: 'Failed to add gateway: ' +  err })
        },
        (gateway) => res.json({ success: true, data: gateway }) // onSuccess
    );
});

// Get All Gateways
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Gateway.getAllGateways((err, gateways) => {
        if (err) return res.json({ success: false , msg: 'Failed to get all gateways: ' +  err });
        res.json({ success: true, data: gateways });
    });
});

// Edit Gateway
router.post('/edit', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Gateway.editGateway(req.body, (err, gateway) => {
        if (err) return res.json({ success: false , msg: 'Failed to edit gateway: ' +  err });
        res.json({ success: true, data: gateway });
    });
});

// Delete Gateway
router.post('/delete', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Gateway.deleteGateway(req.body._id, (err) => {
        if (err) return res.json({ success: false , msg: 'Failed to delete gateway: ' +  err });
        res.json({ success: true, msg: 'Gateway deleted scuccessfully' });
    });
});

module.exports = router;
