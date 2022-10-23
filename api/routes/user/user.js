const { Router } = require('express')
const allUser = require('../../controller/user/allUser')
const authUser = require('../../controller/user/authUser')
const getUsersToConversationStart = require('../../controller/user/getUsersToConversationStart')
const userProfilePic = require('../../controller/user/userProfilePic')
const User = require('../../models/User')

const user = Router()

user.get('/authUser', authUser)
user.get('/allUser', allUser)
user.get("/allUser/:id", userProfilePic)
user.post("/getUserToConversationStart", getUsersToConversationStart)

module.exports = user
