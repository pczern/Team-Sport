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
        type: [Number],
        index: '2d'
  		},
  		"name": String,
  		"description": String,
  		"date": Date,
  		"people": Array
  	}
  }
};
