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

    Protocol.addProtocol(newProtocol,
        (err) => res.json({ success: false , msg: 'Failed to add protocol: ' +  err }), // onError
        (protocol) => res.json({ success: true, data: protocol }) // onSuccess
    );
});

// Get All Protocols
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Protocol.getAllProtocols((err, protocols) => {
        if (err) return res.json({ success: false , msg: 'Failed to get all protocols: ' +  err });
        res.json({ success: true, data: protocols });
    });
});

// Edit Protocol
router.post('/edit', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Protocol.editProtocol(req.body, (err, protocol) => {
        if (err) return res.json({ success: false , msg: 'Failed to edit protocol: ' +  err });
        res.json({ success: true, data: protocol });
    });
});

// Delete Protocol
router.post('/delete', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Protocol.deleteProtocol(req.body._id, (err) => {
        if (err) return res.json({ success: false , msg: 'Failed to delete protocol: ' +  err });
        res.json({ success: true, msg: 'Protocol deleted scuccessfully' });
    });
});

module.exports = router;
