const { Router } = require("express");
const createMessageRoom = require("../../controller/messages/createMessageRoom");

const messagesRouter = Router();

messagesRouter.put("/", createMessageRoom);

module.exports = messagesRouter;
