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

        } catch (error) {
            response.status = 500;
        }finally{
            res.status(200).send(response);
        }
    }
    getById = async (req,res)=>{
        let response = this.getResponse();
        try {

        } catch (error) {
            response.status = 500;
        }finally{
            res.status(200).send(response);
        }
    }
    getByUserId = async (req,res)=>{
        let response = this.getResponse();
        try {

        } catch (error) {
            response.status = 500;
        }finally{
            res.status(200).send(response);
        }
    }
    getMyList = async (req,res)=>{
        let response = this.getResponse();
        try {

        } catch (error) {
            response.status = 500;
        }finally{
            res.status(200).send(response);
        }
    }
    createList = async (req,res)=>{
        let response = this.getResponse();
        try {

        } catch (error) {
            response.status = 500;
        }finally{
            res.status(200).send(response);
        }
    }
    updateList = async (req,res)=>{
        let response = this.getResponse();
        try {

        } catch (error) {
            response.status = 500;
        }finally{
            res.status(200).send(response);
        }
    }
    deleteList = async (req,res)=>{
        let response = this.getResponse();
        try {

        } catch (error) {
            response.status = 500;
        }finally{
            res.status(200).send(response);
        }
    }
    addSound = async (req,res)=>{
        let response = this.getResponse();
        try {

        } catch (error) {
            response.status = 500;
        }finally{
            res.status(200).send(response);
        }
    }
}

const queries = {
    getAll: 'SELECT * FROM list',
    getSoundByList: 'SELECT * FROM list_sound INNER JOIN sound ON list_sound.sound_id = ? WHERE list_id = ?',
    getById: 'SELECT * FROM list WHERE id = ?',
    getByUserId: 'SELECT * FROM list WHERE user_id = ?',
    getMyList: 'SELECT * FROM list WHERE user_id = ?',
    createList: 'INSERT INTO list (title, user_id) VALUES (?,?)',
    updateList: 'UPDATE list SET title = ? WHERE id = ? AND user_id = ?',
    deleteList: 'DELETE FROM list WHERE id = ? AND user_id = ?',
    addSound: 'INSERT INTO list_sound (list_id, sound_id) VALUES (?,?)'
}

module.exports = new ListController(); 