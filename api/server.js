const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const dbConnect = require("./config/db");
const mainRoutes = require("./routes/main");
const ideaRoutes = require("./routes/ideas");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
dbConnect();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging

//Use forms for put / delete

// Setup Sessions - stored in MongoDB




// Passport middleware
app.use(passport.initialize());
// app.use(passport.session());

//Use flash messages for errors, info, ect...

//SET GLOBAL VARIABLE
app.use(function(req, res, next) {
  res.locals.user = req.user || null
  next()
})

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/ideas", ideaRoutes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
