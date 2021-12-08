const db = require('./db');

class AlbumController {
    constructor() {
    }

    getResponse(){
        return {
            status: 200,
            data: undefined,
            error: undefined
        }
    }

    getAll = async (req,res) => {
        const response = this.getResponse();
        try {
            const albums = await db.asyncQuery(queries.getAll);
            response.data = albums;
        } catch (error) {
            response.status = 500;
            response.error = error;
        }finally{
            res.status(200).send(response);
        }
    }

    getById = async (req,res) => {
        const response = this.getResponse();
        try {
            const album = await db.asyncQuery(queries.getById, [req.params.id]);
            response.data = album[0];
        } catch (error) {
            response.status = 500;
            response.error = error;
        }finally{
            res.status(200).send(response);
        }
    }

    create = async (req,res) => {
        const response = this.getResponse();
        try {
            const {name, }
            const album = await db.asyncQuery(queries.create, [req.body.name, req.body.artist_id]);
            response.data = album;
        } catch (error) {
            response.status = 500;
            response.error = error;
        }finally{
            res.status(200).send(response);
        }
    }

}

// La tabla de album tiene las siguientes columnas: id, title, file_id
const queries = {
    getAll: 'SELECT * FROM album',
    getById: 'SELECT * FROM album WHERE id = ?',
    create: 'INSERT INTO album (title, file_id) VALUES (?, ?)',
    update: 'UPDATE album SET title = ? WHERE id = ?',
    delete: 'DELETE FROM album WHERE id = ?'
}

module.exports = new AlbumController();