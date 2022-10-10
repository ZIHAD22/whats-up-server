const { Schema, model } = require("mongoose");

const conversationSchema = new Schema(
    {
        members: [{
            type: Schema.Types.String,
            required: true,
        }],
    },
    { timestamps: true }
);

const Conversation = model("Conversation", conversationSchema);

module.exports = Conversation;
