const mysql = require('mysql2')

const connectionPool = mysql.createPool({
    host: 'localhost',
    // port: optional
    user: 'root',
    password: '',
    database: 'collection'
    
})

module.exports = connectionPool