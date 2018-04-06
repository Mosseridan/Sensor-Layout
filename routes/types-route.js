const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Type = require('../models/type-model');

// Get All Types
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Type.getAllTypes((err, types) => {
        if (err) return res.json({ success: false , msg: 'Failed to get all types: ' +  err });
        res.json({ success: true, data: types });
    });
});

// Add Type
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const newType = new Type({
        'name': req.body.name
    });

    Type.addType(newType,
        (err) => { // onError
            console.log(err);
            res.json({ success: false , msg: 'Failed to add type: ' +  err })
        },
        (type) => res.json({ success: true, data: type }) // onSuccess
    );
});

// Delete Type
router.post('/delete', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Type.deleteType(req.body._id, (err) => {
        if (err) return res.json({ success: false , msg: 'Failed to delete type: ' +  err });
        res.json({ success: true, msg: 'Type deleted scuccessfully' });
    });
});

// Edit Type
router.post('/edit', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Type.editType(req.body, (err, type) => {
        if (err) return res.json({ success: false , msg: 'Failed to edit type: ' +  err });
        res.json({ success: true, data: type });
    });
});



module.exports = router;
