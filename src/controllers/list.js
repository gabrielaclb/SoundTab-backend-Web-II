const db = require('./db');

class ListController {
    constructor(){
    }

    getResponse = ()=>{
        return {
            status: 200,
            data: undefined,
            error: undefined
        }
    }

    getAll = async (req,res)=>{
        let response = this.getResponse();
        try {
            let data = await db.asyncQuery(queries.getAll)
            response.data = data;
        } catch (error) {
            response.status = 500;
        }finally{
            res.status(200).send(response);
        }
    }
    getById = async (req,res)=>{
        let response = this.getResponse();
        try {
            let data = await db.asyncQuery(queries.getById, [req.params.id])
            response.data = data[0];
            let data2 = await db.asyncQuery(queries.getSoundByList, [req.params.id]);
            response.data.sounds = data2;
        } catch (error) {
            console.log(error);
            response.status = 500;
        }finally{
            res.status(200).send(response);
        }
    }
    getByUserId = async (req,res)=>{
        let response = this.getResponse();
        try {
            let data = await db.asyncQuery(queries.getByUserId, [req.params.id])
            response.data = data;
        } catch (error) {
            response.status = 500;
        }finally{
            res.status(200).send(response);
        }
    }
    getMyList = async (req,res)=>{
        let response = this.getResponse();
        try {
            let data = await db.asyncQuery(queries.getMyList, [req.user.sub])
            response.data = data;
        } catch (error) {
            response.status = 500;
        }finally{
            res.status(200).send(response);
        }
    }
    createList = async (req,res)=>{
        let response = this.getResponse();
        try {
            let data = await db.asyncQuery(queries.createList, [req.body.name, req.user.sub])
            response.data = {
                id: data.insertId,
                name: req.body.name
            };
        } catch (error) {
            response.status = 500;
        }finally{
            res.status(200).send(response);
        }
    }
    updateList = async (req,res)=>{
        let response = this.getResponse();
        try {
            let data = await db.asyncQuery(queries.updateList, [req.body.name, req.body.id, req.user.sub])
        } catch (error) {
            response.status = 500;
        }finally{
            res.status(200).send(response);
        }
    }
    deleteList = async (req,res)=>{
        let response = this.getResponse();
        try {
            let data = await db.asyncQuery(queries.deleteList, [req.params.id, req.user.sub])
        } catch (error) {
            response.status = 500;
        }finally{
            res.status(200).send(response);
        }
    }
    addSound = async (req,res)=>{
        let response = this.getResponse();
        try {
            let data = await db.asyncQuery(queries.addSound, [req.body.id, req.body.sound_id])
        } catch (error) {
            console.log(error);
            response.status = 500;
        }finally{
            res.status(200).send(response);
        }
    }
}

const queries = {
    getAll: 'SELECT * FROM list',
    getSoundByList: 'SELECT sound.*, file.url as file_url FROM list_sound INNER JOIN sound ON list_sound.sound_id = sound.id INNER JOIN file ON file.id = sound.file_id WHERE list_id = ?',
    getById: 'SELECT * FROM list WHERE id = ?',
    getByUserId: 'SELECT * FROM list WHERE user_id = ?',
    getMyList: 'SELECT * FROM list WHERE user_id = ?',
    createList: 'INSERT INTO list (title, user_id) VALUES (?,?)',
    updateList: 'UPDATE list SET title = ? WHERE id = ? AND user_id = ?',
    deleteList: 'DELETE FROM list WHERE id = ? AND user_id = ?',
    addSound: 'INSERT INTO list_sound (list_id, sound_id) VALUES (?,?)'
}

module.exports = new ListController(); 