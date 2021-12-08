const express = require('express');
const api = express.Router();
const albumController = require('../controllers/album');
const mdAuth = require('../middlewares/auth');
const multer = require('multer');
const upload = multer();

/* Users */
api.get('/album',[mdAuth.ensureAuth], albumController.getAll);
api.get('/album/id/:id',[mdAuth.ensureAuth], albumController.getById);
api.get('/album/band/id/:id',[mdAuth.ensureAuth],albumController.getByBand);
/* Admins */
api.put('/album/admin', [mdAuth.ensureAuth, mdAuth.ensureAdmin], upload.single('file'), albumController.update);
api.post('/album/admin', [mdAuth.ensureAuth, mdAuth.ensureAdmin], upload.single('file'), albumController.create);
api.delete('/album/admin/id/:id', [mdAuth.ensureAuth, mdAuth.ensureAdmin], albumController.delete);

module.exports = api;