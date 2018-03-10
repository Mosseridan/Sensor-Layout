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
        'gateway': req.body.gateway, 
        'site': req.body.site,
    });


    Sensor.addSensor(newSensor, (err, sensor) => {
        if (err) return res.json({ success: false , msg: 'Failed to add sensor: ' +  err });
        res.json({ success: true, sensor: sensor });
    });
       
});

module.exports = router;
