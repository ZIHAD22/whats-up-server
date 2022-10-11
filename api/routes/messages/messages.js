const { Router } = require("express");
const createMessageRoom = require("../../controller/messages/createMessageRoom");
const getMessageRoom = require("../../controller/messages/getMessageRoom");

const messagesRouter = Router();

messagesRouter.post("/", createMessageRoom);
messagesRouter.get("/:conversationId", getMessageRoom);

module.exports = messagesRouter;
