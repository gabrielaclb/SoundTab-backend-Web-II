const express = require('express');
const api = express.Router();
const soundController = require('../controllers/sound');
const mdAuth = require('../middlewares/auth');
const multer = require('multer');
const upload = multer();

/*
//Rutas usuarios
//Lista de canciones
api.get('/sound',[mdAuth.ensureAuth, mdAuth.ensureUser], soundController.getSounds);
//Detalle de cancion
api.get('/sound/id/:id',[mdAuth.ensureAuth, mdAuth.ensureUser], soundController.getSound);
//Me gusta una cancion
api.post('/sound/like/id/:id',[mdAuth.ensureAuth, mdAuth.ensureUser], soundController.likeSound);
//No me gusta una cancion
api.post('/sound/dislike/id/:id',[mdAuth.ensureAuth, mdAuth.ensureUser], soundController.dislikeSound);
//Lista de canciones favoritas
api.get('/sound/favorites',[mdAuth.ensureAuth, mdAuth.ensureUser], soundController.getFavorites);
//Lista de canciones que sigue el usuario
api.get('/sound/list/follow',[mdAuth.ensureAuth, mdAuth.ensureUser], soundController.getListFollow);
//Seguir una lista de canciones
api.post('/sound/list/follow/id/:id',[mdAuth.ensureAuth, mdAuth.ensureUser], soundController.followSound);
//Crear lista de canciones
api.post('/sound/list',[mdAuth.ensureAuth, mdAuth.ensureUser], soundController.createList);
//Eliminar lista de canciones
api.delete('/sound/list/id/:id',[mdAuth.ensureAuth, mdAuth.ensureUser], soundController.deleteList);
//Agregar cancion a lista
api.post('/sound/list/id/:id',[mdAuth.ensureAuth, mdAuth.ensureUser], soundController.addSoundList);
//Lista canciones de album
api.get('/sound/album/id/:id',[mdAuth.ensureAuth, mdAuth.ensureUser], soundController.getAlbum);
//Lista canciones de artista
api.get('/sound/band/id/:id',[mdAuth.ensureAuth, mdAuth.ensureUser], soundController.getBand);
//Buscar canciones
api.get('/sound/search/:query',[mdAuth.ensureAuth, mdAuth.ensureUser],soundController.searchSound);
*/


//Administradores
//Lista de canciones
api.get('/sound/admin', soundController.getAdminList);
//Detalle de cancion
api.get('/sound/admin/id/:id', soundController.getAdminDetails);
//Crear cancion
api.post('/sound/admin/create', upload.single('file'), soundController.create);
//Actualizar cancion
api.put('/sound/admin', soundController.update);
//Eliminar cancion
api.delete('/sound/admin/id/:id', soundController.delete);

module.exports = api;