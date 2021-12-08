const db = require('./db');
const fileService = require('../services/file');;

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

    getByBand = async (req,res) => {
        const response = this.getResponse();
        try {
            const albums = await db.asyncQuery(queries.getByBand, [req.params.id]);
            response.data = albums;
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
            const {title, band_id} = req.body;
            let file_id = null;

            if(req.file){
                const file = await fileService.uploadAttachedFile(req.file, 'album');
                file_id = file.id;
            }

            const album = await db.asyncQuery(queries.create, [title, band_id, file_id]);
            response.data = {id: album.insertId, ...req.body};
        } catch (error) {
            console.log(error);
            response.status = 500;
            response.error = error;
        }finally{
            res.status(200).send(response);
        }
    }

    update = async (req,res) => {
        const response = this.getResponse();
        try {
            const {id, title, band_id, file_id} = req.body;
            await db.asyncQuery(queries.update, [title, id]);
            response.data = {...req.body};
        } catch (error) {
            response.status = 500;
            response.error = error;
        }finally{
            res.status(200).send(response);
        }
    }

    delete = async (req,res) => {
        const response = this.getResponse();
        try {
            await db.asyncQuery(queries.delete, [req.params.id]);
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
    getAll: 'SELECT album.*, file.url as file_url FROM album LEFT JOIN file ON album.file_id = file.id',
    getById: 'SELECT album.*, file.url as file_url FROM album LEFT JOIN file ON album.file_id = file.id WHERE album.id = ?',
    getByBand: 'SELECT album.*, file.url as file_url FROM album LEFT JOIN file ON album.file_id = file.id WHERE album.band_id = ?',
    create: 'INSERT INTO album (title, band_id, file_id) VALUES (?, ?, ?)',
    update: 'UPDATE album SET title = ? WHERE id = ?',
    delete: 'DELETE FROM album WHERE id = ?'
}

module.exports = new AlbumController();