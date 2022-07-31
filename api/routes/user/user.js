const { Router } = require('express')
const allUser = require('../../controller/user/allUser')
const authUser = require('../../controller/user/authUser')
const userProfilePic = require('../../controller/user/userProfilePic')

const user = Router()

user.get('/authUser', authUser)
user.get('/allUser' , allUser)
user.get("/allUser/:id" , userProfilePic)

module.exports = user
