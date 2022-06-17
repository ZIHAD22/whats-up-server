require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dataBase = require('./api/utility/dataBase')
const signUp = require('./api/routes/SignUp/signUp')

// app
const app = express()
const PORT = process.env.PORT || 5000

// database connected
dataBase().catch((err) => console.log(err))

// middleware
app.use(cors())
app.use(express.json())
app.use('/signUp', signUp)

// router
app.get('/', (req, res) => {
  res.send('all ok')
})

// server
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`),
)