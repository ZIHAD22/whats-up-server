const verifyAccessToken = require('./verifyAccessToken')

const verifyUser = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).send({ message: 'UnAuthorized Access' })
  }

  const accessToken = token.split(' ')[1]
  const decodedToken = verifyAccessToken(accessToken)
  console.log(decodedToken);
  if (!decodedToken.decoded) {
    return res.status(403).send({ message: 'Forbidden Access' })
  } else {
    req.decoded = decodedToken.decodedToken
    next()
  }
}

module.exports = verifyUser
