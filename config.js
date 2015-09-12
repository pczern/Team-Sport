var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = {
  "database": "mongodb://master:master@ds051170.mongolab.com:51170/team-sport",
  "schemas": {
  	"user": {
  		"name": String,
  		"password": String,
  		"email": String
  	},
  	"location": {
  		"coordinates": {
  			"x": String,
  			"y": String
  		},
  		"name": String,
  		"description": String,
  		"date": Date,
  		"people": Array
  	}
  }
};
