const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    const token = req.headers.authrization.split(' ')[1]
    if (!token) {
      return res.status(401).json({ message: 'Ошибка авторизации' })
    }

    const decoded = jwt.verify(token, confid.get('secretKey'))
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Ошибка авторизации', err })
  }
}
