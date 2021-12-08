'use strict'

const express = require('express');
const api = express.Router();
const mdAuth = require('../middlewares/auth');
const AdminController = require('../controllers/admin');

// public routes
api.post('/admin/signin', AdminController.signin);
// restricted routes admin


module.exports = api
