'use strict'



const db = require('./db'),
      jwt = require('./jwt'),
      base = require('./base')


const Config = {
  db,
  jwt,
  base,
}


module.exports = Config
