const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Protocol = require('../models/protocol-model');

// Add Protocol
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res, next) => { 
    const newProtocol = new Protocol({
        'name': req.body.name
    });

    Protocol.addProtocol(newProtocol, (err, protocol) => {
        if (err) return res.json({ success: false , msg: 'Failed to add protocol: ' +  err });
        res.json({ success: true, data: protocol });
    });
});

// Get All Protocols
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Protocol.getAllProtocols((err, protocols) => {
        if (err) return res.json({ success: false , msg: 'Failed to get all protocols: ' +  err });
        res.json({ success: true, data: protocols });
    });      
});

module.exports = router;