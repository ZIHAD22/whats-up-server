const mongoose = require('mongoose')

async function dataBase() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4qyxg.mongodb.net/whats-up?retryWrites=true&w=majority`,
    )
  } finally {
    console.log('db connected')
  }
}

module.exports = dataBase
