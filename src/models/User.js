const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const config = require("../config/setting.conf")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: 'Role'
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company'
    },
    tokens: [{
      token: {
          type: String,
          required: true
      }
  }]
});

userSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()

  delete userObject.password
  delete userObject.tokens
  // delete userObject.avatar

  return userObject
}

userSchema.methods.generateAuthToken = async function () {
  const user = this
  // const token = jwt.sign({ _id: user._id.toString() }, config.authentication.jwtSecret)
  const ONE_WEEK = 60 * 60 * 24 * 7
  // const token = jwt.sign( user, 'secret', { expiresIn: '1h' })
  const token = jwt.sign({ _id: user._id.toString() }, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })


  user.tokens = user.tokens.concat({ token })
  await user.save()

  return token
}

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email })

  if (!user) {
      throw new Error('Unable to login')
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
      throw new Error('Unable to login')
  }

  return user
}

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
  const user = this

  if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8)
  }

  next()
})

  
const User = mongoose.model('User', userSchema)

module.exports = User
