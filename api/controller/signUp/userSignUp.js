const User = require('../../models/User')
const bcrypt = require('bcrypt')
const setJwtToken = require('../../utility/setJwtToken')

const userSignUp = async (req, res) => {
  const { name, email, password, profilePic } = req.body

  console.log(email);

  if (!name || !email || !password) {
    return res.status(400).send('Please Enter all info')
  }

  const userExist = await User.findOne({ email })

  if (userExist) {
    return res.status(400).send('user already exist')
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
    return res.json({
      success: true,
      result: signUpUser,
      userToken: `Bearer ${userToken}`,
    })
  }
}

module.exports = {
  userSignUp,
}
