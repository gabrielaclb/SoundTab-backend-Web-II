const express = require('express');
const api = express.Router();
const bandController = require('../controllers/band');
const mdAuth = require('../middlewares/auth');
const multer = require('multer');
const upload = multer();


/* Users */
api.get('/band', [mdAuth.ensureAuth], bandController.getAll);
api.get('/band/id/:id', [mdAuth.ensureAuth], bandController.getById);

/* Admin */
api.put('/band/admin', [mdAuth.ensureAuth, mdAuth.ensureAdmin], upload.single('file'), bandController.update);
api.post('/band/admin', [mdAuth.ensureAuth, mdAuth.ensureAdmin], upload.single('file'), bandController.create);
api.delete('/band/admin/id/:id', [mdAuth.ensureAuth, mdAuth.ensureAdmin], bandController.delete);

module.exports = api;