const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Manufacturer = require('../models/manufacturer-model');

// Add Manufacturer
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const newManufacturer = new Manufacturer({
        'name': req.body.name
    });

    Manufacturer.addManufacturer(newManufacturer,
        (err) => res.json({ success: false , msg: 'Failed to add manufacturer: ' +  err }), // onError
        (manufacturer) => res.json({ success: true, data: manufacturer }) // onSuccess
    );
});

// Get All Manufacturers
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Manufacturer.getAllManufacturers((err, manufacturers) => {
        if (err) return res.json({ success: false , msg: 'Failed to get all manufacturers: ' +  err });
        res.json({ success: true, data: manufacturers });
    });
});

// Edit Manufacturer
router.post('/edit', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Manufacturer.editManufacturer(req.body, (err, manufacturer) => {
        if (err) return res.json({ success: false , msg: 'Failed to edit manufacturer: ' +  err });
        res.json({ success: true, data: manufacturer });
    });
});

// Delete Manufacturer
router.post('/delete', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Manufacturer.deleteManufacturer(req.body._id, (err) => {
        if (err) return res.json({ success: false , msg: 'Failed to delete manufacturer: ' +  err });
        res.json({ success: true, msg: 'Manufacturer deleted scuccessfully' });
    });
});

module.exports = router;
