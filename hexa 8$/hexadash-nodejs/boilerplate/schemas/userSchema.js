const mongoose = require('mongoose')
const { isEmail } = require('validator')
const validator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name field is required !'],
    },
    email:{
        type:String,
        validate:[isEmail,'Enter a valid email address !'],
        required:[true,'Email address is required !'],
        unique:true
    },    
    password:{
        type:String,
        required:[true,'Enter your desired password !']
    }
})
userSchema.plugin(validator,{message:'Email address already exists !'})
module.exports = userSchema