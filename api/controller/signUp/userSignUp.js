const User = require('../../models/User')

const userSignUp = async (req, res) => {
  const { name, email, password, profileImg } = req.body

  if (!name || !email || !password) {
    res.status(400).send('Please Enter all info')
  }

  const userExist = await User.findOne({ email })

  if (userExist) {
    res.status(400).send('user already exist')
  }

  const signUpUser = await User.create({
    name,
    email,
    password,
    profileImg,
  })

  if (signUpUser) {
    res.json(signUpUser)
  }
}

module.exports = {
  userSignUp,
}
