const matchscore = require('../models/matchscore.model')
const match = require('../middlewares/matchbydate.middleware')
const option = require('../models/option.model')
module.exports = {
    createRecord: async(req,res,next)=>{
        let {...body} = req.body
        try {
            matchscore.findOne({ 'playerId': body.playerId })
            let matchdata = await match()
            let create = await matchscore.create({
                playerId: body.playerId,
                result1: matchdata[0].home+" "+body.team1score+" - "+body.team2score+" "+matchdata[0].away,
                result2: matchdata[1].home+" "+body.team3score+" - "+body.team4score+" "+matchdata[1].away,
                result3: matchdata[2].home+" "+body.team5score+" - "+body.team6score+" "+matchdata[2].away,
                result4: matchdata[3].home+" "+body.team7score+" - "+body.team8score+" "+matchdata[3].away
            })
            res.json(create)
        } catch (error) {
            console.log(error)
            res.json({
                code:500,
                mess:"Failed"
            })
        }
    },
    readRecord: async(req,res,next)=>{
        let {...body} = req.body
        try {
            let record = await matchscore.findOne({ 'playerId': body.playerId })
            if(!record){
                res.json(record)
            }else{
                res.json({
                    code:404,
                    mess:"record not found"
                })
            }

        } catch (error) {
            console.log(error)
            res.render("failure",{result:"Có lỗi trong quá trình truy cập, quý khách vui lòng kiểm tra lại sau ít phút."})
        }
    }
}