const mongoose = require('mongoose')
const matches = mongoose.Schema({
    group:{
        type:String,
        required: true
    },
    home_team:{
        type:String,
        required: true
    },
    away_team:{
        type:String,
    },
    home_flag:{
        type:String,
    },
    away_flag:{
        type:String,
    },
    local_date:{
        type:String,
    },
    local_time:{
        type:String,
    },
},{ timestamps: true })

module.exports = mongoose.model('matches',matches)