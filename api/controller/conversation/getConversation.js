const Conversation = require("../../models/Conversation")
const User = require("../../models/User")

const getConversation = async (req, res) => {
    const userId = req.params.userId
    if (!userId) {
      return  res.status(400).send("Please Provide Info")
    }

    const conversation = await Conversation.find({
        members: { $in: [userId] }
    })

    if (conversation.length === 0) {
        return res.status(404).json({ result: "no messages founded" })
    }

    const friendsId = conversation.map(con => con.members.find(member => member !== userId))


    const conversationFriends = await User.find({ _id: { $in: friendsId } })

    res.status(200).json({ conversation, conversationFriends })
}

module.exports = getConversation