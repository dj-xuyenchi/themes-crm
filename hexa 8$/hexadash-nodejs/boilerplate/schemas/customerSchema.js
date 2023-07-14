const mongoose = require('mongoose')
const { isEmail } = require('validator')
const validator = require('mongoose-unique-validator')

const customerSchema = mongoose.Schema({
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
    phone:{
        type:String,
        required:[true,'Phone number is required !'],
        unique:[true,'Phone number already exists !']
    },
    countryOption:{
        type:String,
        required:[true,'Country field is required !']
    },
    cityOption:{
        type:String,
        required:[true,'City field is required !']
    },
    company:{
        type:String
    },
    position:{
        type:String
    },
    join:{
        type:String
    },
    status:{
        type:String
    },
    image:{
        type:String
    }
})
customerSchema.plugin(validator,{message:'Email address already exists !'})
module.exports = customerSchema