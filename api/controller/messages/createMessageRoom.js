const Messages = require("../../models/Messages");
const { ObjectId } = require("mongoose");

const createMessageRoom = async (req, res) => {
  const { conversationId, sender, message } = req.body

  if (!conversationId && !sender && !message) {
    return res.status(400).send("Please Provide Info")
  }

  const createMessage = await Messages.create({ conversationId, sender, message })

  res.send(createMessage)


};

module.exports = createMessageRoom;
