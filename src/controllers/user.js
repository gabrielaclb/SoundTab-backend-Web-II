const db = require('./db');
const jwt = require('../services/jwt');
const bcrypt = require('bcrypt');

class UserController{
    constructor(){
        this.salt = 10;
    }

    getResponse(){
        return {
            status: 200,
            data: undefined,
            error: undefined
        }
    }

    signin = async (req, res, next) => {
        let response = this.getResponse();
        try {
            const user = await db.asyncQuery(queries.signin, [req.body.email.trim()]);
            if(user.length > 0){
                let result = await bcrypt.compare(req.body.password, user[0].password);
                if(result){
                    delete user[0].password;
                    response.data = {
                        token: jwt.createToken(user[0]),
                        profile: user[0]
                    }
                }else{
                    response.status = 403;
                    response.error = 'Password incorrect';
                }
            }else{
                response.status = 404;
                response.error = 'User not found';
            }
        } catch (error) {
            response.status = 500;
        } finally {
            res.status(200).send(response);
        }
    }
      
    signup = async (req, res) => {
        let response = this.getResponse();
        try {
            let user = req.body;
            let hash = await bcrypt.hash(user.password, 10);
            user.password = hash;
            await db.asyncQuery(queries.signup, [user.name, user.lastname, user.email.trim(), user.password]);
        } catch (error) {
            console.log(error);
            response.status = 500;
        } finally {
            res.status(200).send(response);
        }
    }

    updateProfile = async (req, res) => {
        let response = this.getResponse();
        try {
            let user = req.body;
            await db.asyncQuery(queries.updateProfile, [user.name, user.lastname, req.user.sub]);
            if(user.password){
                let hash = await bcrypt.hash(user.password, 10);
                user.password = hash;
                await db.asyncQuery(queries.updatePassword, [user.password, req.user.sub]);
            }
        } catch (error) {
            console.log(error);
            response.status = 500;
        } finally {
            res.status(200).send(response);
        }
    }

    getProfile = async (req, res) => {
        let response = this.getResponse();
        try {
            let user = await db.asyncQuery(queries.getProfile, [req.user.sub]);
            response.data = user[0];
        } catch (error) {
            console.log(error);
            response.status = 500;
        } finally {
            res.status(200).send(response);
        }
    }

}


const queries = {
    signin: 'SELECT * FROM user WHERE email = ?',
    signup: 'INSERT INTO user (name, lastname, email, password) VALUES (?, ?, ?, ?);',
    getProfile: 'SELECT * FROM user WHERE id = ?',
    updateProfile: 'UPDATE user SET name = ?, lastname = ? WHERE id = ?',
    updatePassword: 'UPDATE user SET password = ? WHERE id = ?'
}

module.exports = new UserController();