/* Team-Sport */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Promise = require("bluebird");
var config = require('./config');
mongoose.connect(config.database);
var User = mongoose.model("User", new Schema(config.schemas.user));
var Location = mongoose.model('Location', new Schema(config.schemas.location));

//Login

exports.login = function(username, password) {

	return User.findOne({
		name = req.body.name
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
	User.findOne({
		name = req.body.name
	}).exec()
	.then(function(user){
		if (user) {
			throw "Benutzer existiert bereits!"
		}
		return new User({
					name: username,
					password: password,
					email: email
		}).save().exec()

	})
};

exports.findLocations = function(){
  return Location.find().exec();
}

exports.addLocation
