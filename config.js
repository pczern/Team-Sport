module.exports = {
  "database": "mongodb://master:master@ds051170.mongolab.com:51170/team-sport",
  "schemas": {
  	"user": {
  		"name": String,
  		"password": String,
  		"email": String
  	},
  	"event": {
  		"coordinates": {
        type: [Number],
        index: "2d"
  		},
      "name": String,
  		"type": String,
  		"description": String,
  		"date": Date,
      "timespan": Number,
  		"people": Array // ids
  	}
  },
  "maps": "AIzaSyATjz0wjKUiSlLWwmB32kEp9A8rW0KeTUw" //Google Maps API key
};
