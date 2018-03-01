const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user-model');

// Register
router.post('/register', (req, res, next) => {// passport.authenticate('jwt', { session: false }), (req, res, next) => {
    
    const newUser = new User({
        'username': req.body.username,
        'password': req.body.password,
        'fname': req.body.fname,
        'lname': req.body.lname,
        'email': req.body.email
    });

    // TODO: add field validation.
    
    // Check whether a user with this username already exists and if not create the new user
    User.getUserByUsername(newUser.username, (err, user) => {
        if (err) res.json({ success: false, msg: 'Failed to register user: ' + err });
        if (user) return res.json({ success: false, msg: 'Sorry, this username is taken. try anotherone.' });
        User.registerUser(newUser, (err, user) => {
            if (err) res.json({ success: false, msg: 'Failed to register user: ' + err });
            else res.json({ success: true, msg: 'Congratulations! You are now registered.' });
        });
    });
});


// Authenticate
router.post('/authenticate', (req, res, next) => {
    // TODO: add field validation.
    
    // Get user by username and authenticate it's password
    User.getUserByUsername(req.body.username, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ success: false, msg: 'User not found.' });
        User.comparePassword(req.body.password, user.password, (err, isMatch) => {
            if (err) return res.json({ success: false, msg: err });
            if (isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, { expiresIn: 604800 /* 1 week */ });
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    credentials: {
                        _id: user._id,
                        username: user.username,
                    }
                }); 
            }
            else res.json({ success: false, msg: 'Wrong password.' });
        });
    });
});

module.exports = router;