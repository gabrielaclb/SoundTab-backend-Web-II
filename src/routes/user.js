const express = require('express')
const api = express.Router()
const mdAuth = require('../middlewares/auth')
const UserController = require('../controllers/user');

// public routes
api.post('/user/signin', UserController.signin)
api.post('/user/signup', UserController.signup)

api.put('/user/update', mdAuth.ensureAuth, UserController.updateProfile)
api.get('/user/profile', mdAuth.ensureAuth, UserController.getProfile)

module.exports = api;