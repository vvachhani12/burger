var express = require("express");
// Import routes and give the server access to them.
var routes = require("./controllers/burger_controllers.js");
// Set Handlebars.
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname+"/public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
