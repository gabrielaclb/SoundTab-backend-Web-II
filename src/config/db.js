'use strict'

let connectionLimit,
    host,
    database,
    user,
    pa$$word,
    port

switch(process.env.NODE_ENV) {
  default:
  case 'development':
    connectionLimit = 100
    host = '64'+'.227'+'.12'+'.252' //Costumbre de seguridad :3
    port = 3306
    database = 'soundtab'
    user = 'administrador'
    pa$$word = 'p6X2'+'FNsM_'
    break

  case 'staging':
    connectionLimit = 50,
    host = '64'+'.227'+'.12'+'.252'
    port = 3306
    database = 'soundtab'
    user = 'administrador'
    pa$$word = 'p6X2F'+'NsM_'
    break

  case 'production':
    connectionLimit = 50
    host = '64'+'.227'+'.12'+'.252'
    port = 3306
    database = 'soundtab'
    user = 'administrador'
    pa$$word = 'p6X2FNs'+'M_'
    break;
}

const Config = new Object({
  connectionLimit : connectionLimit,
  host: host,
  user: user,
  password: pa$$word,
  database: database,
  port
})


module.exports = Config
