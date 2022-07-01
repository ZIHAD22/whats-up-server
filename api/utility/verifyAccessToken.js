var jwt = require('jsonwebtoken')

const verifyAccessToken = (encryptedAccessToken) => {
  try {
    const decodedToken = jwt.verify(
      encryptedAccessToken,
      process.env.JWT_SECRET,
    )

    return { decoded: true, decodedToken }
  } catch (e) {
    return { decoded: false, errorMessage: e.message }
  }
}

module.exports = verifyAccessToken
