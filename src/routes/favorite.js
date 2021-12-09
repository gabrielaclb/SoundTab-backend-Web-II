const express = require('express')
const api = express.Router()
const mdAuth = require('../middlewares/auth')
const FavoriteController = require('../controllers/favorite');

api.get('/favorite', mdAuth.ensureAuth, FavoriteController.getFavorites);
api.post('/favorite/add/id/:id', mdAuth.ensureAuth, FavoriteController.addFavorite);
api.delete('/favorite/delete/id/:id', mdAuth.ensureAuth, FavoriteController.removeFavorite);

module.exports = api;