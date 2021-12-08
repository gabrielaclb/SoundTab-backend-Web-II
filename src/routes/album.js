const express = require('express');
const api = express.Router();
const bandController = require('../controllers/band');
const mdAuth = require('../middlewares/auth');



module.exports = api;