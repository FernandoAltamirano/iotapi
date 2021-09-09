const bcrypt = require("bcrypt")
const config = require("../../config")
const helpers = {}


helpers.encryptPassword = async (password) => {

    const salt = await bcrypt.genSalt(10)

    const password_hash = await bcrypt.hash(password, salt)

    return password_hash
}

helpers.matchPassword = async (password, savedPassword) => {

    return await bcrypt.compare(password, savedPassword)
}

helpers.isLoggedIn = (req, res, next) => {

    if (req.isAuthenticated()) 
        return next()
    
    return res.redirect("/login")
}


module.exports = helpers






