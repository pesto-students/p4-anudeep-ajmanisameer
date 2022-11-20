const express = require("express");
const http = require("http");
const dotenv = require('dotenv').config();
const app = express();
const path = require('path')
const connectDB = require('./config/db');
const expressLayouts = require("express-ejs-layouts");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require('passport')

//Passport config
require('./config/passport')(passport);

//database connect
connectDB();

//EJS
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

//BodyParser
app.use(express.urlencoded({ extended: false }));

// Express Session Middleware
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//connect flash
app.use(flash());

//global vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

//Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/user"));

http.createServer(app).listen(process.env.PORT || 3000);
console.log("Express Server running..=", process.env.PORT || 3000);
