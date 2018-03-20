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

// // Get Types By Kind
// router.get('/by-kind/:kind', passport.authenticate('jwt', { session: false }), (req, res, next) => {
//     Type.getTypesByKind(req.params.kind, (err, types) => {
//         if (err) return res.json({ success: false , msg: 'Failed to get ' + req.params.kind + ' types: ' +  err });
//         res.json({ success: true, data: types });
//     });      
// });


// // Get Kinds
// router.get('/kinds', passport.authenticate('jwt', { session: false }), (req, res, next) => {
//     Type.getKinds((err, kinds) => {
//         if (err) return res.json({ success: false , msg: 'Failed to get kinds: ' +  err });
//         res.json({ success: true, data: kinds });  
//     });
// });

module.exports = router;