const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Sensor = require('../models/sensor-model');

// Add Sensor
router.post('/add', (req, res, next) => {//passport.authenticate('jwt', { session: false }), (req, res, next) => {
    const newSensor = new Sensor({
        'name': req.body.name,
        'type': req.body.type, 
        'manufacturer': req.body.manufacturer,
        'protocols':  req.body.protocols,
        'gateway': req.body.gateway, 
        'site': req.body.site,
    });

    Sensor.addSensor(newSensor,
        (err) => { // onError
            console.log(err);
            res.json({ success: false , msg: 'Failed to add sensor: ' +  err })
        }, 
        (sensor) => res.json({ success: true, data: sensor }) // onSuccess
    );       
});

module.exports = router;
