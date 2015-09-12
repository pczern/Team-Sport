/* Team-Sport */

var mongoose = require('mongoose');

var config = require('./config');

var Location = mongoose.model('Location', new Schema(config.schemas.location));

exports.findLocations = function(){
  return Location.find().exec();
}
