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

    Manufacturer.addManufacturer(newType,
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

module.exports = router;