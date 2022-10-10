const { Router } = require("express")
const createConversation = require("../../controller/conversation/createConversation")
const getConversation = require("../../controller/conversation/getConversation")

const conversationRouter = Router()

conversationRouter.post("/", createConversation)
conversationRouter.get("/:userId", getConversation)

module.exports = conversationRouter