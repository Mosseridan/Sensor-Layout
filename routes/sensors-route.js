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
        'protocol':  req.body.protocol,
        'gateway': req.body.gateway._id, 
        'site': req.body.site._id,
    });

    Sensor.addSensor(newSensor,
        (err) => res.json({ success: false , msg: 'Failed to add sensor: ' +  err }), // onError
        (sensor) => res.json({ success: true, data: sensor }) // onSuccess
    );       
});

module.exports = router;
