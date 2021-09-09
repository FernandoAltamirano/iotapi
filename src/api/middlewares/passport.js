const db = require("../../database")
const helpers = require("./helpers")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy


passport.serializeUser((user, done) => {

    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {

    const rows = await db.query("SELECT id, name, last_name, cellphone, email FROM users WHERE id = ?", [id])

    done(null, rows[0])
})

passport.use("login", new LocalStrategy({

    usernameField: "email",
    passwordField: "password",
    passReqToCallback: false

}, async (email, password, done) => {

    const rows = await db.query("SELECT id, password FROM users WHERE email = ?", [email])

    if (rows.length > 0) {
        const user = rows[0]

        const validate = await helpers.matchPassword(password, user.password)

        if (validate) {
            done(null, user, {message: "Login successful"})
        }
        else{
            done(null, false, {message: "Incorrect Password"})
        }
    }
    else {
        done(null, false, {message: "User Not Found"})
    }
}))

passport.use("signup", new LocalStrategy({

    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true

}, async (req, email, password, done) => {

    const {cellphone, name, last_name} = req.body

    const newUser = {name, last_name, cellphone, email, password}

    newUser.password = await helpers.encryptPassword(password)

    const result = await db.query("INSERT INTO users SET ?", [newUser])

    newUser.id = result.insertId

    done(null, newUser, {message: "Signup successful"})
}))






