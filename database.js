/* Team-Sport */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var request = require('request');
var Promise = require("bluebird");
var config = require('./config');
var hat = require('hat');
var crypto = require('crypto');

var User = mongoose.model("User", new Schema(config.schemas.user));
var Event = mongoose.model('Event', new Schema(config.schemas.event));

Promise.promisify(request);

mongoose.connect(config.database);

//Login
exports.login = function(username, password) {
	return User.findOne({
		name: username
	}).then(function(user){
		if (user === null)
			throw "Benutzer existiert nicht!"
		else if (user.password != hash(password))
			throw "Falsches Passwort!"

		return Promise.resolve(user);
	});
};

//Registrieren
exports.register = function(name, email, password) {
  console.log(name, email, password);
	return User.findOne({
    name,
    email
  }).then(function(user){
    console.log(user);

		if(user !== null)
			throw "Benutzer existiert bereits!";

	  var newuser = new User({
			name,
			password: hash(password),
		  email
		});

    return newuser.save();
	});
};

exports.findEvent = function(){
  return Event.find();
}

exports.addEvent = function(object, user) { //object is the
  var x = parseFloat(object.x);
  var y = parseFloat(object.y);

  var event = new Event({
    coordinates: [y, x],
    name: object.name,
    type: object.type,
    description: object.description,
    start: new Date(object.start),
    end: new Date(object.end),
    people: [user.id]
  });

  return event.save();
}

//id = event id
exports.enterEvent = function(id, user) { // adds your ID to the event people
  return Event.find({id})
  .then(function(event) {
    event.people.push(user.id);
    return event.save();
  });
}

//Google Geocoding
exports.getCoordinates = function(location) {
  return request.getAsync(`https://maps.googleapis.com/maps/api/geocode/json?key=${config.maps}&components=locality:Köln&address=${location}`)
  .then((response, _body) => {
    var body = JSON.parse(_body);

    if(body.status === 'ZERO_RESULTS' || body.status === 'OVER_QUERY_LIMIT')
      throw 'No results.'

    if(body.status !== 'OK')
      throw body.error_message;

    return Promise.resolve(body.results[0].geometry.location);
  });
}

var getStreet = exports.getStreet = function(latitude, longitude) {
  return request.getAsync(`https://maps.googleapis.com/maps/api/geocode/json?key=${config.maps}&address=${location}`)
  .then((response, _body) => {
    var body = JSON.parse(_body);

    if(body.status === 'ZERO_RESULTS' || body.status === 'OVER_QUERY_LIMIT')
      throw 'No results.';

    if(body.status !== 'OK')
      throw body.error_message;

    return Promise.resolve(body.results[0].formatted_address);
  });
}

//Util
var hash = function(pwd){
  return crypto.createHash('sha256').update(pwd).digest('base64');
}
