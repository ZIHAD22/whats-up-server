const { Router } = require('express')
const authUser = require('../../controller/user/authUser')

const user = Router()

user.get('/authUser', authUser)

module.exports = user
