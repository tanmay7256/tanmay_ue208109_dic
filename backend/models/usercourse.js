const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usercoursesSchema = new Schema({
    email: { type: String, required: true, unique: true },
    courses: { type: Object, required: true },
})
module.exports = mongoose.model('Usercourse', usercoursesSchema)