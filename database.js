/* Team-Sport */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Promise = require("bluebird");
var config = require('./config');
var hat = require('hat');

var User = mongoose.model("User", new Schema(config.schemas.user));
var Event = mongoose.model('Event', new Schema(config.schemas.event));

mongoose.connect(config.database);

//Login
exports.login = function(username, password) {
	return User.findOne({
		name: username
	}).exec().then(function(user){
		if (!user) {
			throw "Benutzer existiert nicht!"
		} else if (user.password != password){
			throw "Falsches Passwort!"
		}

		return Promise.resolve(user);
	});
};

//Registrieren
exports.register = function(username, password, email) {
	return User.findOne({
		name: req.body.name
	}).exec().then(function(user){
		if (user) {
			throw "Benutzer existiert bereits!"
		}

		return new User({
					name: username,
					password: password,
					email: email
		}).save().exec();
	});
};

exports.findEvent = function(){
  return Event.find().exec();
}

exports.addEvent = function(object, user) { //object is the
  var x = parseFloat(object.x);
  var y = parseFloat(object.y);

  var event = new Event({
    coordinates: [y, x],
    name: object.name, // ???
    type: object.type,
    description: object.description,
    start: new Date(object.start),
    end: new Date(object.end),
    people: [user.id]
  });

  return event.save().exec();
}

//id = event id
exports.enterEvent = function(id, user) { // adds your ID to the event people
  return Event.find({id}).exec()
  .then(function(event) {
    event.people.push(user.id);
    return event.save().exec();
  });
}
