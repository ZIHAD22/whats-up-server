const { Router } = require('express')
const allUser = require('../../controller/user/allUser')
const authUser = require('../../controller/user/authUser')

const user = Router()

user.get('/authUser', authUser)
user.get("/allUser" , allUser)

module.exports = user
