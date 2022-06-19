const bcrypt = require('bcrypt')
const User = require('../../models/User')
const userSingIn = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  console.log(user)
  res.json(user)
}

module.exports = userSingIn
