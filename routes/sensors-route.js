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
        'longitude': req.body.longitude,
        'latitude': req.body.latitude
    });

    Sensor.addSensor(newSensor,
        (err) => { // onError
            console.log(err);
            res.json({ success: false , msg: 'Failed to add sensor: ' +  err })
        },
        (sensor) => res.json({ success: true, data: sensor }) // onSuccess
    );
});

// Get All Sensors
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Sensor.getAllSensors((err, sensors) => {
        if (err) return res.json({ success: false , msg: 'Failed to get all sensors: ' +  err });
        res.json({ success: true, data: sensors });
    });
});

// Edit Sensor
router.post('/edit', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Sensor.editSensor(req.body, (err, sensor) => {
        if (err) return res.json({ success: false , msg: 'Failed to edit sensor: ' +  err });
        res.json({ success: true, data: sensor });
    });
});

// Delete Sensor
router.post('/delete', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Sensor.deleteSensor(req.body._id, (err) => {
        if (err) return res.json({ success: false , msg: 'Failed to delete sensor: ' +  err });
        res.json({ success: true, msg: 'Sensor deleted scuccessfully' });
    });
});


module.exports = router;
