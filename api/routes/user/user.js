const { Router } = require('express')
const allUser = require('../../controller/user/allUser')
const authUser = require('../../controller/user/authUser')
const userProfilePic = require('../../controller/user/userProfilePic')
const User = require('../../models/User')

const user = Router()

user.get('/authUser', authUser)
user.get('/allUser', allUser)
user.get("/allUser/:id", userProfilePic)
// user.get("/conversationUser", async (req, res) => {
//     const { conversationUserArray } = req.body
//     console.log(req.body);
//     const findAllUser = await User.find({ _id: { $in: conversationUserArray } })
//     // const findAllUser = await User.find()
//     res.json(findAllUser)
// })

module.exports = user
