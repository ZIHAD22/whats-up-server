const { Router } = require('express')
const { userSignUp } = require('../../controller/signUp/userSignUp')

const signUp = Router()

signUp.post('/', userSignUp)

module.exports = signUp
