const express = require('express');
const api = express.Router();
const albumController = require('../controllers/album');
const mdAuth = require('../middlewares/auth');

api.get('/album/admin', albumController.getAll);
api.get('/album/admin/id/:id', albumController.getById);
api.get('/album/admin/band/id/:id', albumController.getByBand);
api.put('/album/admin', albumController.update);
api.post('/album/admin', albumController.create);
api.delete('/album/admin/id/:id', albumController.delete);

module.exports = api;