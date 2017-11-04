const bodyParser = require("body-parser");
const express = require("express");
const methodOverride = require("method-override");

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/catsController.js");

// app.use("/", routes);

app.listen(port);
require("./controllers/burgers_controller.js")(app)

var db = require("./models");

db.sequelize.sync({ force: true }).then(function() {
	var PORT = process.env.PORT || 8080;
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });



});



// var controller = require("./controllers/burgers_controller.js");
// var burger = require("./models/burger.js")
// controller(app);


//burger_name,callback






