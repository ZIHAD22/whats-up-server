const { Schema, model } = require("mongoose");

const messagesSchema = new Schema(
  {

    conversationId: { type: Schema.Types.String, required: true },
    sender: { type: Schema.Types.String, required: true, },
    message: { type: Schema.Types.String, required: true },


  },
  { timestamps: true }
);

const Messages = model("Messages", messagesSchema);

module.exports = Messages;
