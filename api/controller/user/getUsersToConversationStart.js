const User = require("../../models/User")

const getUsersToConversationStart = async (req, res) => {
    const { usersId, searchKey } = req.body


    if (searchKey) {
        const searchFilteredUsers = await User.find({ $and: [{ $nor: [{ _id: { $in: usersId } }] }, { $text: { $search: searchKey } }] })
        return res.json(searchFilteredUsers)
    }

    const filteredUsers = await User.find({ $nor: [{ _id: { $in: usersId } }] })
    res.json(filteredUsers)
}

module.exports = getUsersToConversationStart