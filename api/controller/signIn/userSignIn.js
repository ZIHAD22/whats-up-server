const bcrypt = require('bcrypt')
const User = require('../../models/User')
const setJwtToken = require('../../utility/setJwtToken')
const userSingIn = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(400).json('Please Enter all info')
  }

  const userToken = await setJwtToken({ email })

  //   console.log(userToken)

  const user = await User.findOne({ email })
  const encryptedPass = user.password

  const isValidUser = await bcrypt.compare(password, encryptedPass)

  if (isValidUser) {
    return res.json({
      success: true,
      result: user,
      userToken: `Bearer ${userToken}`,
    })
  }

  res.json({
    success: false,
    result: 'Password is Not Correct Please Check and TryAgan',
  })
}

module.exports = userSingIn
