const Messages = require("../../models/Messages")

const getMessageRoom = async (req, res) => {

    const { conversationId } = req.params

    if (!conversationId) {
        return res.status(400).send("Please Provide Info")
    }

    const messages = await Messages.find({
        conversationId
    })

    if (messages.length === 0) {
        return res.status(404).send("No message found")
    }

    res.status(200).json(messages)
}



module.exports = getMessageRoom