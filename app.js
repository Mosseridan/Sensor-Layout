const path = require('path');
const cors = require('cors');
// const Rx = require('rxjs/Rx');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser')
const express = require('express');
const app = require('express')();
const http = require('http').Server(app);
const users = require('./routes/users-route');
const types = require('./routes/types-route');
const protocols = require('./routes/protocols-route');
const manufacturers = require('./routes/manufacturers-route');
const sensors = require('./routes/sensors-route');
const gateways = require('./routes/gateways-route');
const sites = require('./routes/sites-route');
const config = require('./config/database');
const jsons = require('./routes/jsons-route');


mongoose.Promise = require('bluebird');
// Connect to DataBase
mongoose.connect(config.database);

// On connection
mongoose.connection.on('connected', () => 
    console.log('Connected to database: '+config.database));

// On connection
mongoose.connection.on('error', (err) => 
    console.log('DataBase error: '+err));

const port = process.env.PORT || 8080;

// CORS middleware
app.use(cors());


// Body-parser middleware
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);
app.use('/types', types);
app.use('/protocols', protocols);
app.use('/manufacturers', manufacturers);
app.use('/sensors', sensors);
app.use('/gateways', gateways);
app.use('/sites', sites);
app.use('/jsons', jsons);

// // Index route
// app.get('*', (req,res) =>
// res.sendFile(path.join(__dirname, 'index.html')));

// Set static foleder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'shared')));

// Start Server
http.listen(port, () => { 
  console.log('Server started on port '+ port);
});