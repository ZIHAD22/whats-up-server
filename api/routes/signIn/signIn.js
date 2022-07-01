const { Router } = require('express')
const userSingIn = require('../../controller/signIn/userSignIn')

const signIn = Router()

signIn.post('/', userSingIn)

module.exports = signIn
