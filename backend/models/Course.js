const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    desc: { type: String, required: true }
})
module.exports = mongoose.model('Course', courseSchema)