const fs = require('fs')
const File = require('../models/File')
const config = require('config')

class FileService {
  createDir(File) {
    const filePath = `${config.get('filesPath')}/${File.user}/${File.path}`
    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdir(filePath, (err) => (err ? console.log(err) : ''))
          return resolve({
            message: 'Этот файл был успешно создан',
          }).then((message) => console.log({ message }))
        } else {
          return reject({ message: 'Данный файл уже есть' }).then((message) =>
            console.log({ message })
          )
        }
      } catch (err) {
        return reject(err)
      }
    })
  }
}

module.exports = new FileService()
