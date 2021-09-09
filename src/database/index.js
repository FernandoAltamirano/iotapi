const { database } = require(".././config")
const { promisify } = require("util")
const mysql = require("mysql2")

const pool = mysql.createPool(database)

pool.getConnection((err, connection) => {
    
    if (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST")
            console.error("DATABASE CONNECTION WAS CLOSED")
        
        if (err.code === "ER_CON_COUNT_ERROR")
            console.error("DATABASE HAS TO MANY CONNECTIONS")

        if (err.code === "ECONNREFUSED  ")
            console.error("DATABASE CONNECTION WAS REFUSED")
    }
    else if (connection) {

        connection.release()
        console.log("DATABASE IS CONNECTED")
    }

    return
})

//this works to can use querys with async-await
pool.query = promisify(pool.query)


module.exports = pool