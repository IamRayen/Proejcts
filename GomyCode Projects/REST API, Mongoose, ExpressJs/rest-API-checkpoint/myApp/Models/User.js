const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
        FullName : {
            type: String,
            required: true
        },
        Email : {
            type: String,
            required: true
        }
},{timestamps:true})

module.exports = mongoose.model('User',userSchema)