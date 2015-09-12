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
  .then((user) => response.cookie(userCookie, user).jsonp({success: true}))
  .catch((error) => response.jsonp({success: false, error: error}));
});

router.post('/register', urlEncoded, (request, response) => {
  database.register(request.body.username, request.body.email, request.body.password)
  .then(() => response.cookie(userCookie, user).jsonp({success: true}))
  .catch((error) => {
    console.warn(error);
    response.jsonp({success: false, error: error})
  });
});

router.use(cookieParser());

router.get('/find/events', (request, response) => {
  database.findEvents()
  .then((locations) => response.jsonp(locations))
  .catch((error) => response.jsonp({success: false, error: error}));
});

router.post('/add/event', urlEncoded, (request, response) => {
  database.addEvent(request.body)
  .then(() => response.jsonp({success: true}))
  .catch((error) => response.jsonp({success: false, error: error}));
});

router.get('/get/street', (request, response) => {
  database.getStreet()
  .then(() => response)
});

router.post('/location/:id/enter', (request, response) => {
  Promise.try(function(){
    if(!request.cookies[userCookie])
      throw 'You aren\'t logged in.';

    return database.enterEvent(request.params.id, JSON.parse(request.cookies[userCookie]).id)
  }).then(() => response.jsonp({success: true}))
  .catch((error) => response.jsonp({success: false, error: error}));
});

router.get('/')

module.exports = router;
