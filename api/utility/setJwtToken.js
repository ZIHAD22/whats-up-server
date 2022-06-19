var jwt = require('jsonwebtoken')
const setJwtToken = async (credentials) => {
  const userToken = jwt.sign(credentials, process.env.JWT_SECRET, {
    expiresIn: '2d',
  })

  return userToken
}

module.exports = setJwtToken
