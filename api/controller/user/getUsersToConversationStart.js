const User = require("../../models/User")

const getUsersToConversationStart = async (req, res) => {
    const { usersId } = req.body

    const filteredUsers = await User.find({ $nor: [{ _id: { $in: usersId } }] })

    console.log(filteredUsers);

    res.json(filteredUsers)
}

module.exports = getUsersToConversationStart