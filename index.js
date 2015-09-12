/* Team-Sport. */
const express = require('express');
const http = require('http');
const mongoose = require("mongoose");

const database = require('./database');
const config = require('./config');

const app = express();

app.use(express.static(__dirname + '/public'));

app.use('/api', require('./api'));

http.createServer(app).listen(8080, () => console.log('Server responding on port 8080.'));
