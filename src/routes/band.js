const express = require('express');
const api = express.Router();
const bandController = require('../controllers/band');
const mdAuth = require('../middlewares/auth');

api.get('/band/admin', bandController.getAll);
api.get('/band/admin/id/:id', bandController.getById);
api.put('/band/admin', bandController.update);
api.post('/band/admin', bandController.create);
api.delete('/band/admin/id/:id', bandController.delete);

module.exports = api;