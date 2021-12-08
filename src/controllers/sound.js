const db = require('./db');
const fileService = require('../services/file');
class SoundController {
  constructor() {}

  getResponse = ()=>{
    return {
      status: 200,
      data: undefined,
      error: undefined
    };
  }

  getAll = async (req, res) => {
    let response = this.getResponse();
    try {
      const sounds = await db.asyncQuery(queries.getAll);
      response.data = sounds;
    } catch (error) {
      response.error = error;
    }finally{
      res.status(200).send(response);
    }
  }

  getById = async (req, res) => {
    let response = this.getResponse();
    try {
      const sound = await db.asyncQuery(queries.getById, [req.params.id]);
      response.data = sound;
    } catch (error) {
      response.error = error;
    }finally{
      res.status(200).send(response);
    }
  }

  getByAlbum = async (req, res) => {
    let response = this.getResponse();
    try {
      const sounds = await db.asyncQuery(queries.getByAlbumId, [req.params.id]);
      response.data = sounds;
    } catch (error) {
      response.error = error;
    }finally{
      res.status(200).send(response);
    }
  }

  create = async (req, res) => {
    let response = this.getResponse();
    try {
      const {title, album_id} = req.body;
      const file = await fileService.uploadAttachedFile(req.file, 'sound');
      const sound = await db.asyncQuery(queries.create, [title, album_id, file.id]);
      response.data = {
        id: sound.insertId,
        album_id: album_id,
        file_id: sound.id,
        file_url: file.url,
        reproduction_quantity: 0
      };
    } catch (error) {
      response.error = error;
    }finally{
      res.status(200).send(response);
    }
  }  

  update = async (req, res) => {
    let response = this.getResponse();
    try {
      const {title, id} = req.body;
      const sound = await db.asyncQuery(queries.update, [title, id]);
      response.data = {...req.body};
    } catch (error) {
      response.error = error;
    }finally{
      res.status(200).send(response);
    }
  }

  delete = async (req, res) => {
    let response = this.getResponse();
    try {
      await db.asyncQuery(queries.delete, [req.params.id]);
    } catch (error) {
      response.error = error;
    }finally{
      res.status(200).send(response);
    }
  }

}

// La tabla sound tiene las columnas: title, reproduction_quantity, album_id, band_id, file_id
const queries = {
  
  getAll: `
    SELECT 
      sound.*,
      file.url as file_url
    FROM sound 
      INNER JOIN album ON sound.album_id = album.id 
      INNER JOIN file ON sound.file_id = file.id
    ORDER BY sound.id DESC
  `,
  getById: 'SELECT sound.*, file.url as file_url FROM sound INNER JOIN file ON sound.file_id = file.id INNER JOIN album ON sound.album_id = album.id WHERE id = ?;',
  getByTitle: "SELECT sound.*, file.url as file_url FROM sound INNER JOIN file ON sound.file_id = file.id INNER JOIN album ON sound.album_id = album.id WHERE title LIKE ?;",
  getByAlbumId: "SELECT sound.*, file.url as file_url FROM sound INNER JOIN file ON sound.file_id = file.id INNER JOIN album ON sound.album_id = album.id WHERE album_id = ?;",
  getByBandId: "SELECT sound.*, file.url as file_url FROM sound INNER JOIN file ON sound.file_id = file.id INNER JOIN album ON sound.album_id = album.id WHERE band_id = ?;",

  create: 'INSERT INTO sound (title, album_id, file_id) VALUES (?, ?, ?);',
  update: 'UPDATE sound SET title = ? WHERE id = ?;',
  delete: 'DELETE FROM sound WHERE id = ?;',
  play: 'UPDATE sound SET reproduction_quantity = reproduction_quantity + 1 WHERE id = ?;'

}

module.exports = new SoundController();