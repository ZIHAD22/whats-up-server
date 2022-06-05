require('dotenv').config()
const express = require('express')
const cors = require('cors')

// app
const app = express()
const PORT = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

// router
app.get('/', (req, res) => {
  res.send('all ok')
})

// server
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`),
)
