module.exports = {
  "database": "mongodb://master:master@ds051170.mongolab.com:51170/team-sport",
  "schemas": {
  	"user": {
  		"name": String,
  		"password": String,
  		"email": String,
      "session": String
  	},
  	"event": {
  		"coordinates": {
        type: [Number],
        index: "2d"
  		},
      "name": String,
  		"type": String,
  		"description": String,
  		"start": Date,
      "end": Date,
  		"people": Array // ids
  	}
  }
};
