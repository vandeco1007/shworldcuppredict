const mongoose = require('mongoose')
const bcryptjs= require("bcryptjs")
const accountSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    password:String,
    role:{
        type:String,
        default:"user"
    },
    site:{
        type:String,
        default:"bet789"
    }
})

accountSchema.pre("save", function(next){
    const account = this
    if(account.password){
        account.password= bcryptjs.hashSync(account.password)
    }
    next()
})

accountSchema.pre("findOneAndUpdate", function(){
    const account = this
    if(account.password){
        account.password= bcryptjs.hashSync(account.password, 10)
    }
    this.setUpdate(account)
})

module.exports = mongoose.model('account',accountSchema)