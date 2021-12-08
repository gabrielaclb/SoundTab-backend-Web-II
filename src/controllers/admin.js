'use strict'

const bcrypt = require('bcrypt-nodejs')
const db = require('./db')
const jwt = require('../services/jwt')

class AdminControllers {
  
  constructor(){
    console.log('Controlador de admins, creado.');
  }

  getResponse(){
    return {
      status: 200,
      data: [],
      error: []
    }
  }
  
  signin = async (req, res, next) => {
  
    const response = this.getResponse();  
  
    try {

      const profile = await db.asyncQuery(`SELECT * FROM admin WHERE email = ? AND status = 1 LIMIT 1`, [req.body.email]);

      if(profile.length > 0) {
        //Comparo las passwords
        await new Promise((resolve,reject) =>{
          bcrypt.compare(req.body.password, profile[0].password, async (err, check) => {
            
            if(err) {
              response.status = 500;
              response.error.push('GENERAL_ERROR')
              resolve();
            }
  
            else {

              //Si el password es correcto
              if(check) {

                const admin = profile[0];
                admin.role = 2;
                profile[0].password = undefined;
                profile[0].status = undefined;

                response.data.push({
                  'token': jwt.createToken(admin),
                  'profile': profile[0],
                });

              }
              //Si no
              else {
                response.status = 403;
                response.error.push('INCORRECT_PASSWORD')
              }
              
              resolve();
            }
  
          })
        })

      } else {
        response.status = 404;
        response.error.push('INVALID_USER')
      }

    }catch(err) {
      console.log(err);
      response.status = 500;
      response.error.push(err);
    }finally{
      res.status(200).send(response);
    }
  
  }
  
}

module.exports = new AdminControllers();
