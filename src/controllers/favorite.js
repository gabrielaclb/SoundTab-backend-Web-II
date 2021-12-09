const db = require('./db');

class FavoriteController {

    constructor(){

    }

    getResponse(){
        return {
            status: 200,
            data: undefined,
            error: undefined
        }
    }

    getFavorites = async (req,res) =>{
        let response = this.getResponse();
        try{
            let favorites = await db.asyncQuery(queries.getFavorites, [req.user.sub]);
            response.data = favorites;
        }
        catch(err){
            response.error = err;
        }
        finally{
            res.status(200).send(response);
        }
    }

    addFavorite = async (req,res) =>{
        let response = this.getResponse();
        try{
            let favorite = await db.asyncQuery(queries.addFavorite, [req.user.sub, req.params.id]);
            response.data = {id: favorite.insertId};
        }
        catch(err){
            response.error = err;
        }
        finally{
            res.status(200).send(response);
        }
    }

    removeFavorite = async (req,res) =>{
        let response = this.getResponse();
        try{
            await db.asyncQuery(queries.removeFavorite, [req.user.sub, req.params.id]);
        }
        catch(err){
            response.error = err;
        }
        finally{
            res.status(200).send(response);
        }
    }

}

const queries = {
    getFavorites: 'SELECT * FROM favorite WHERE user_id = ?;',
    addFavorite: 'INSERT INTO favorite (user_id, sound_id) VALUES (?, ?);',
    removeFavorite: 'DELETE FROM favorite WHERE user_id = ? AND id = ?;'
};

module.exports = new FavoriteController();