/* Team-Sport. */
const express = require('express');
const http = require('http');
const mongoose = require("mongoose");

const database = require('./database');
const config = require('./config');

const app = express();
app.get('/', (request, response) => response.sendFile('public/index.html'));

app.get('/login', (request, response) => response.sendFile('public/login.html'));

app.get('/register', (request, response) => response.sendFile('public/register.html'));

app.use('/api', require('./api'));

http.createServer(app).listen(8080, () => console.log('Server responding on port 8080.'));
