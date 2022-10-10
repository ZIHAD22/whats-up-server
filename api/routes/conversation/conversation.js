const { Router } = require("express")
const createConversation = require("../../controller/conversation/createConversation")

const conversationRouter = Router()

conversationRouter.post("/", createConversation)

module.exports = conversationRouter