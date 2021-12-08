const express = require('express');
const api = express.Router();
const soundController = require('../controllers/sound');
const mdAuth = require('../middlewares/auth');
const multer = require('multer');
const upload = multer();

// Users
api.get('/sound',[mdAuth.ensureAuth], soundController.getAll);
api.get('/sound/album/id/:id', [mdAuth.ensureAuth],soundController.getByAlbum);
api.get('/sound/id/:id',[mdAuth.ensureAuth], soundController.getById);

// Admin
api.post('/sound/admin/create', [mdAuth.ensureAuth, mdAuth.ensureAdmin], upload.single('file'), soundController.create);
api.put('/sound/admin',[mdAuth.ensureAuth, mdAuth.ensureAdmin], soundController.update);
api.delete('/sound/admin/id/:id', [mdAuth.ensureAuth, mdAuth.ensureAdmin], soundController.delete);

module.exports = api;