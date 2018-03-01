const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User schema
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
       type: String,
       required: true 
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
      type: String,
      required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);


module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
    User.findOne({'username': username}, callback);
}


module.exports.hashPassword = function(password, callback) {
    bcrypt.genSalt(10, (err,salt) => {
        if(err) callback(err);
        else bcrypt.hash(password, salt, callback);
    });
}


module.exports.registerUser = function(newUser, callback) {
    this.hashPassword(newUser.password, (err, hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save(callback);
    });
}


module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, callback);
}


module.exports.validatePassword = function(userId, userPassword, callback) {
    this.getUserById(userId, (err, user) => {
        if(err) callback(err);
        if(!user) callback(null, false);
        else {
            callback(null, user.password == userPassword);
        }
    });
}