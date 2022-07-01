const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profilePic: {
      type: String,
      default: 'https://i.ibb.co/HVnmBnY/dummy-profile-pic-300x300.png',
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
)

const User = model('User', userSchema)

module.exports = User
