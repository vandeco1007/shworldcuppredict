const mongoose = require('mongoose')
const f8_matchscore = mongoose.Schema({
    playerId:{
        type:String,
        required: true,
    },
    result1:{
        type:String,
        default:"none"
    },
    result2:{
        type:String,
        default:"none"
    },
    result3:{
        type:String,
        default:"none"
    },
    result4:{
        type:String,
        default:"none"
    },
    createDate:{
        type:String
    },
    ip:{
        type:String,
    },
    fp:{
        type:String,
    }
})

module.exports = mongoose.model('f8_matchscore',f8_matchscore)