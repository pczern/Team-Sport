/* api.js - All API routes */

const express = require('express');

const router = express.Router();

router.get('/users/current/', (request, response) => {
  database.getCurrent()
  .then(function(){

  });
});
module.exports = router;
