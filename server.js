var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");



app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/views')));


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);





// store the function in a variable
// var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
// routes_setter(app);






// Setting our Server to Listen on Port: 8000
app.listen(8008, function() {
    console.log("listening on port 8008");
});