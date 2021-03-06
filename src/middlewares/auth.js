'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config/jwt')



const ensureAuth = (req, res, next) => {
  if(!req.headers.authorization)
    return res.status(403).send()

  let token = req.headers.authorization.replace(/['"]+/g, ''),
      payload;

  try {
    token = token.replace('Bearer ','');
    payload = jwt.decode(token, config.secret)
    
    if(payload.exp <= moment().unix()) {
      return res.status(401).send({
        "error" : ["El token ha expirado"]
      })
    }
  }

  catch(err) {
    return res.status(403).send({
      "error" : ["El token no es válido"]
    })
  }

  req.user = payload
  next()
}

const ensureUser = (req, res, next) => {

  if(!req.headers.authorization)
    return res.status(403).send(
      {
        "error" : ["Usuario no autorizado"]
      }
    )

  let token = req.headers.authorization.replace(/['"]+/g, ''),
      payload

  try {
    token = token.replace('Bearer ','');
    payload = jwt.decode(token, config.secret)

    if(!payload.type_user_id) {
      return res.status(403).send({
        "error" : ["Usuario no autorizado"]
      })
    }
  }

  catch(err) {
    return res.status(403).send({
      "error" : ["Usuario no autorizado"]
    })
  }

  req.user = payload
  next()
}


const ensureAdmin = (req, res, next) => {

  if(!req.headers.authorization)
    return res.status(403).send(
      {
        "error" : ["Administrador no autorizado"]
      }
    )

  let token = req.headers.authorization.replace(/['"]+/g, ''),
      payload

  try {
    token = token.replace('Bearer ','');
    payload = jwt.decode(token, config.secret)
    if(payload.type_user_id != 2) {
      return res.status(403).send({
        "error" : ["Administrador no autorizado"]
      })
    }
  }

  catch(err) {
    return res.status(403).send({
      "error" : ["Administrador no autorizado"]
    })
  }

  req.user = payload
  next()
}

module.exports = {
  ensureAuth,
  ensureUser,
  ensureAdmin,
}
