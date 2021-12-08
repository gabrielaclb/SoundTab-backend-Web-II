const db = require("./db");
const fileService = require('../services/file')
class BandController {
  constructor() {}

  getResponse() {
    return {
      status: 200,
      data: undefined,
      error: undefined,
    };
  }

  getAll = async (req, res) => {
    let response = this.getResponse();
    try {
      let bands = await db.asyncQuery(queries.getAll);
      response.data = bands;
    } catch (err) {
      console.log(err);
      response.error = err;
      response.status = 500;
    } finally {
      res.status(200).send(response);
    }
  };

  getById = async (req, res) => {
    let response = this.getResponse();
    try {
      let band = await db.asyncQuery(queries.getById, [req.params.id]);
      response.data = band[0];
    } catch (err) {
      console.log(err);
      response.error = err;
      response.status = 500;
    } finally {
      res.status(200).send(response);
    }
  };

  create = async (req, res) => {
    let response = this.getResponse();
    try {
        let { title, description} = req.body;
        let file = {
          id: null,
          url: null
        };
        if(req.file){
            file = await fileService.uploadAttachedFile(req.file, 'band');
        }

        let band = await db.asyncQuery(queries.create, [title, description, file.id]);
        response.data = { id: band.insertId, title, description, file_url: file.url , file_id: file.id };
    } catch (err) {
      console.log(err);
      response.error = err;
      response.status = 500;
    } finally {
      res.status(200).send(response);
    }
  };

  update = async (req, res) => {
    let response = this.getResponse();
    try {
      let { title, description, id } = req.body;
      let file = {url: null, id: null};

      if(req.file){
        file = await fileService.uploadAttachedFile(req.file, 'band');
        await db.asyncQuery(queries.updateFile, [file.id, id]);
      }

      await db.asyncQuery(queries.update, [title, description, id]);
      let band = await db.asyncQuery(queries.getById, [id]);
      response.data = {...band[0]};

    } catch (err) {
      console.log(err);
      response.error = err;
      response.status = 500;
    } finally {
      res.status(200).send(response);
    }
  };

  delete = async (req, res) => {
    let response = this.getResponse();
    try {
      await db.asyncQuery(queries.delete, [req.params.id]);
    } catch (err) {
      console.log(err);
      response.error = err;
      response.status = 500;
    } finally {
      res.status(200).send(response);
    }
  };
}

//La base de datos tiene los campos id, title, description, file_id
const queries = {
  getAll: `SELECT 
            band.*, 
            file.url as file_url 
         FROM band 
            LEFT JOIN file ON band.file_id = file.id`,
  getById: `SELECT band.*, file.url as file_url FROM band LEFT JOIN file ON band.file_id = file.id WHERE band.id = ?`,
  create: `INSERT INTO band (title, description, file_id) VALUES (?, ?, ?)`,
  update: `UPDATE band SET title = ?, description = ? WHERE id = ?`,
  delete: `DELETE FROM band WHERE id = ?`,
  updateFile: `UPDATE band SET file_id = ? WHERE id = ?`,
};

module.exports = new BandController();
