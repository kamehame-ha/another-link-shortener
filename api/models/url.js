const { Schema, model } = require('mongoose')

const schema = new Schema({
    code: { type: String, required: true },
    longUrl: { type: String, required: true },
    shortUrl: { type: String, required: true }
})

module.exports = model('url', schema)