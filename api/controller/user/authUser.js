const User = require('../../models/User')

const authUser = async (req, res) => {
  try {
    const { name, email } = req.decoded

    const findUser = await User.findOne({ email })

    console.log(findUser)

    if (!findUser) {
      return res.json({ result: false, user: 'User not Found' })
    }
    res.json({ result: true, user: findUser })
  } catch (e) {
    res.json({ error: e.message })
  }
}

module.exports = authUser
