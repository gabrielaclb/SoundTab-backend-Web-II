'use strict'

const path = require('path')
const fs = require('fs')
const db = require('../controllers/db')


const uploadAttachedFile = async (file, folder = 'files', alt = "", omitSaveDB = false) => {

  return new Promise(async (resolve, reject) => {

    // params validation
    if(!file)
      reject('REQUIRED_FILE');

    let filename = 'file_' + (new Date().getTime()).toString(16) + '.' + file.originalname.split('.')[file.originalname.split('.').length-1],
        urlOriginal = path.join(__dirname, `../../public/${folder}/` + filename),
        uri = folder + '/' + filename

    // TODO: size validation
    // let size = parseInt((base64string).replace(/=/g,"").length * 0.75)
    // if(size > 9000)
    //   reject('FILE_SIZE_EXCEEDED')
    
    try {
      await fs.promises.mkdir(urlOriginal.split('/'+filename)[0], { recursive: true });
    } catch (error) {
      console.log(error);
    }

    /// upload file
    fs.writeFile(urlOriginal, file.buffer, (err, result) => {

      if(err){
        reject('FILE_SAVE_ERROR')
      }

      const fileData = {
        url: uri,
        filename: filename,
        alt: alt,
        type: `${file.mimetype}`
      }

      if(omitSaveDB){
        resolve({id: null, ...fileData});
      }else{
        db.query(`
          INSERT INTO file 
            (url, filename, type, alt) 
          VALUES
            (?, ?, ?, ?)`,
        [
          fileData.url,
          fileData.filename,
          fileData.type,
          fileData.alt
        ],
        (result, err) => {
          if(err)
            reject('FILE_SAVE_ERROR')
          else{
            resolve({
              id:result.insertId,
              url: uri,
            });
          }
        })
      }
      
    })

  })
}

const removeFile = (fileId, remove) => {
  return new Promise((resolve, reject) => {

    db.query('SELECT filename FROM file WHERE id = ?', fileId, (file, err) => {

      if(err || !file.length)
        reject('FILE_NOT_EXIST')

      else {
        const filename = file[0].filename,
              updatedAt = new Date()

        db.query('UPDATE file SET status = 0, updated_at = ? WHERE id = ?', [updatedAt, fileId], (result, err) => {
          if(err)
            reject('SERVER_ERROR')

          // TODO: unlink file
          // if(remove)
          //   fs.unlinkSync(__dirname, '../../public/gallery/' + filename)

          // resolve promise
          resolve()
        })
      }

    })
  })
}


module.exports = {
  removeFile,
  uploadAttachedFile
}