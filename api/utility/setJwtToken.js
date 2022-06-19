var jwt = require('jsonwebtoken')
const setJwtToken = async (credentials = { name: 'ziahd' }) => {
  const userToken = jwt.sign(credentials, process.env.JWT_SECRET, {
    expiresIn: '2d',
  })

  return userToken
}

module.exports = setJwtToken
