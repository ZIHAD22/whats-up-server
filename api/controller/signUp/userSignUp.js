const User = require('../../models/User')
const bcrypt = require('bcrypt')
const setJwtToken = require('../../utility/setJwtToken')

const userSignUp = async (req, res) => {
  const { name, email, password, profilePic } = req.body

  if (!name || !email || !password) {
    res.status(400).send('Please Enter all info')
  }

  const userExist = await User.findOne({ email })

  if (userExist) {
    res.status(400).send('user already exist')
  }

  const userToken = await setJwtToken({ email })

  // encrypting  password
  const hashPassword = await bcrypt.hash(password, 10)

  const signUpUser = await User.create({
    name,
    email,
    password: hashPassword,
    profilePic,
  })

  if (signUpUser) {
    res.json({
      success: true,
      result: signUpUser,
      userToken: `Bearer ${userToken}`,
    })
  }
}

module.exports = {
  userSignUp,
}
