// var mongoose = require("mongoose");
// var People = mongoose.model('People') // We are retrieving this Schema from our Models, named 'People'
var peoples = require('../controllers/peoples.js');

module.exports = function(app){
	app.get('/people', function(req, res) {
		peoples.findAll(req, res)
	})

	app.get('/people/:name/', function(req, res) {
		peoples.addName(req, res)
	})

	app.delete('/people/:id/', function(req, res) {
		peoples.removeName(req, res)
	})

	app.get('/:name', function(req, res) {
		peoples.findOne(req, res)
	})
}