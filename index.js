require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dataBase = require("./api/utility/dataBase");
const signUp = require("./api/routes/signUp/signUp");
const user = require("./api/routes/user/user");
const verifyUser = require("./api/utility/verifyUser");
const signIn = require("./api/routes/signIn/signIn");
const messagesRouter = require("./api/routes/messages/messages");
const conversationRouter = require("./api/routes/conversation/conversation");

// app
const app = express();
const PORT = process.env.PORT || 5000;

// database connected
dataBase().catch((err) => console.log(err));

// middleware
app.use(cors());
app.use(express.json());

// router
app.get("/", (req, res) => {
  res.json({
    result: "All OK",
  });
});
app.use("/signUp", signUp);
app.use("/signIn", signIn);
app.use("/auth", verifyUser, user);
app.use("/conversation", verifyUser, conversationRouter);
app.use("/messages", verifyUser, messagesRouter);

// server
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
