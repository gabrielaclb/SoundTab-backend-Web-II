'use strict'

let connectionLimit,
    host,
    database,
    user,
    password,
    port

switch(process.env.NODE_ENV) {
  default:
  case 'development':
    connectionLimit = 10
    host = 'localhost'
    port = 3306
    database = 'soundtab'
    user = 'root'
    password = 'p6X2FNsM_'
    break

  case 'staging':
    connectionLimit = 50,
    host = 'localhost'
    port = 3306
    database = 'soundtab'
    user = 'administrador'
    password = 'p6X2FNsM_'
    break

  case 'production':
    connectionLimit = 50
    host = 'localhost'
    port = 3306
    database = 'soundtab'
    user = 'administrador'
    password = 'p6X2FNsM_'
    break;
}

const Config = new Object({
  connectionLimit : connectionLimit,
  host: host,
  user: user,
  password: password,
  database: database,
  port
})


module.exports = Config
