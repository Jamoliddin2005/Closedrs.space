const mongoose = require('mongoose')

const User = mongoose.Schema({
    email: { type: 'string', required: true },
    name: { type: 'string', required: true },
    password: { type: 'string', required: true },
})


module.exports = mongoose.model("User", User)