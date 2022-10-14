const mongoose = require('mongoose')

async function dataBase() {
  const productionURl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4qyxg.mongodb.net/whats-up?retryWrites=true&w=majority`

  try {
    await mongoose.connect(
      productionURl
      , {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
  } finally {
    console.log('db connected')
  }
}

module.exports = dataBase
