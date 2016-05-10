var mongoose = require("mongoose");
var People = mongoose.model('People') // We are retrieving this Schema from our Models, named 'People'

module.exports = (function() {
	return {
		findAll: function(req, res) {
			People.find({}, function(err, peoples) {
				if(err){
					console.log("error")
				}
				else{
					console.log("got all peoples!")
					console.log(peoples)
					res.json(peoples);
				}
			})
		},

		addName: function(req, res) {
			console.log(req.params.name)
			var people = new People({name: req.params.name});

			people.save(function(err) {
		    	if(err){
		    		console.log("something went wrong")
		    	}
		    	else{
		    		console.log("added a person!")
					res.json(people);
		    	}
			})
		},

		removeName: function(req, res) {
			People.remove({_id: req.params.id}, function(err, people){
				console.log("people removed")
				res.json(people)
			})
		},

		findOne: function(req, res) {
			People.findOne({name: req.params.name}, function (err, people){
		        res.json(people);
		    })
		}
	}	
})();




