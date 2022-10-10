const Conversation = require("../../models/Conversation")

const createConversation = async (req, res) => {
    const { senderId, receiverId } = req.body

    if (!senderId && !receiverId) {
        res.status(400).send("Please Provide Info")
    }

    const converSation = await Conversation.create({ members: [senderId, receiverId] })

    if (converSation._id) {
        res.status(200).json(converSation)
    }

}

module.exports = createConversation