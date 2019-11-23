const jwt = require('jsonwebtoken')
const { User } = require("../models")
const config = require("../config/setting.conf")

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        // const decoded = jwt.verify(token, 'secret', { expiresIn: '1h' })
        const decoded = jwt.verify(token, config.authentication.jwtSecret)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        // const user = await User.findOne({ _id: decoded.id, 'tokens.token': token })
        // console.log(user)
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth