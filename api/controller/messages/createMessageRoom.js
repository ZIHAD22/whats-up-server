const Messages = require("../../models/Messages");
const { ObjectId } = require("mongoose");

const createMessageRoom = async (req, res) => {
  const { firstSender, lastMessages, senddingTo, lastSender, user } = req.body;
  const result = await Messages.find({ $or: [{ user: [user[1], user[0]] }] });
  console.log(result);
  if (result.length === 0) {
    const sendingMessages = await Messages.create({
      user,
      firstSender,
      senddingTo,
      allMessages: [[lastMessages]],
      lastMessages,
      lastSender,
    });
    // console.log(sendingMessages);
  } else if (result.length % 2 === 0 && result[0]._id === firstSender) {
    const updateMessages = await Messages.updateOne(
      {
        $or: [{ firstSender, senddingTo }],
      },
      { $push: { allMessages: [lastMessages] }, lastMessages, lastSender }
    );
    console.log(updateMessages);
  }

  res.json(req.body);
};

module.exports = createMessageRoom;
