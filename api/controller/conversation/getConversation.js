const Conversation = require("../../models/Conversation")

const getConversation = async (req, res) => {
    const userId = req.params.userId
    if (!userId) {
        res.status(400).send("Please Provide Info")
    }

    const conversation = await Conversation.find({
        members: { $in: [userId] }
    })

    if (conversation.length === 0) {
        return res.status(404).send("No conversation found")
    }

    res.json(conversation)
}

module.exports = getConversation