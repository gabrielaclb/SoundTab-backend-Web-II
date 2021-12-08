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
        let { name, description} = req.body;
        let file_id = null;

        if(req.file){
            const file = await fileService.uploadAttachedFile(req.file, 'band');
            file_id = file.id;
        }

        let band = await db.asyncQuery(queries.create, [name, description, file_id]);
        response.data = { id: band.insertId, name, description, file_id };
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
      let { name, description, id } = req.body;
      await db.asyncQuery(queries.update, [name, description, id]);
      response.data = { id, name, description, file_id };
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
};

module.exports = new BandController();
