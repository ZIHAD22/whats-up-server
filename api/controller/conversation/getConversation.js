const Conversation = require("../../models/Conversation")

const getConversation = async (req, res) => {
    const userId = req.params.userId
    if (!userId) {
        res.status(400).send("Please Provide Info")
    }

    const conversation = await Conversation.find({
        members: { $in: [userId] }
    })

    res.json(conversation)
}

module.exports = getConversation