/* api.js - All API routes */

const database = require('./database');

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const router = express.Router();

//Cookie Setup
const sessionCookie = 'currentSession';
const userCookie = 'currentUser';

//Body Parser Setup
const urlEncoded = bodyParser.urlencoded({ extended: false });

router.use(cookieParser());

router.get('/find/locations', (request, response) => {
  database.findLocations()
  .then((locations) => response.jsonp(locations));
  .catch((error) => response.jsonp({success: false, error: error}));
});

router.post('/add/location', urlEncoded, (request, response) => {
  database.addLocation(request.body)
  .then(() => response.jsonp({success: true}));
  .catch((error) => response.jsonp({success: false, error: error}));
});

module.exports = router;
