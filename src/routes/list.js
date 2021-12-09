const express = require('express');
const api = express.Router();
const listController = require('../controllers/list');
const mdAuth = require('../middlewares/auth');

/* Users */
api.get('/list', [mdAuth.ensureAuth], listController.getAll);
api.get('/list/id/:id', [mdAuth.ensureAuth], listController.getById);
api.get('/list/userid/:id', [mdAuth.ensureAuth], listController.getByUserId)
api.get('/list/profile', [mdAuth.ensureAuth], listController.getMyList);

api.post('/list', [mdAuth.ensureAuth], listController.createList);
api.put('/list', [mdAuth.ensureAuth], listController.updateList);
api.delete('/list/id/:id', [mdAuth.ensureAuth], listController.deleteList);
api.post('/list/add', [mdAuth.ensureAuth], listController.addSound);

module.exports = api;