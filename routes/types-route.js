const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Type = require('../models/type-model');


// Add Type
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res, next) => { 
    const newType = new Type({
        'name': req.body.name
    });

    Type.addType(newType, (err, type) => {
        if (err) return res.json({ success: false , msg: 'Failed to add type: ' +  err });
        res.json({ success: true, data: type });
    });
});

// Get All Types
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Type.getAllTypes((err, types) => {
        if (err) return res.json({ success: false , msg: 'Failed to get all types: ' +  err });
        res.json({ success: true, data: types });
    });      
});

module.exports = router;