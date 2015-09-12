/* api.js - All API routes */

const database = require('./database');

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const Promise = require('bluebird');

const router = express.Router();

//Cookie Setup
const sessionCookie = 'currentSession';
const userCookie = 'currentUser';

//Body Parser Setup
const urlEncoded = bodyParser.urlencoded({ extended: false });

router.post('/login', urlEncoded, (request, response) => {
  database.login(request.body.username, request.body.password)
  .then((user) => {
    response.cookie(userCookie, user).jsonp({success: true});
  });
  .catch((error) => response.jsonp({success: false, error: error}));
});

router.post('/register', urlEncoded, (request, response) => {
  database.register(request.body.username, request.body.email, request.body.password)
  .then(() => response.jsonp({success: true}));
  .catch((error) => response.jsonp({success: false, error: error}));
});

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

router.post('/location/:id/enter', (request, response) => {
  Promise.try(function(){
    if(!request.cookies[userCookie])
      throw 'You aren\'t logged in.';

    return database.enterEvent(request.params.id, request.cookies[userCookie])
  }).then(() => response.jsonp({success: true}))
  .catch((error) => response.jsonp({success: false, error: error}));
});

module.exports = router;
