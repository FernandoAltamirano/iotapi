const express = require("express");
const routes = require("./routes")
const passport = require("passport")
const session = require("express-session")
const mysqlStore = require("express-mysql-session")
const bodyParser = require("body-parser")
const { database } = require("../config")

//INITIALIZATIONS
const app = express()
require("./middlewares/passport")


//MIDDLEWARES
app.use(session({
    secret: "mysqlSession",
    resave: false,
    saveUninitialized: false,
    store: new mysqlStore(database)
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());


//ROUTES
app.use(routes)


module.exports = app

