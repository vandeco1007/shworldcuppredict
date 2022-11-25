const matchscore = require('../models/matchscore.model')
const match = require('../middlewares/matchbydate.middleware')
const option = require('../models/option.model')
module.exports = {
    createRecord: async(req,res,next)=>{
        let {...body} = req.body
        try {
            matchscore.findOne({ 'playerId': body.playerId })
            let matchdata = await match()
            let i = -1
            homeTeam = {}
            let team = []
            console.log(matchdata[0]['home_team'])
            matchdata.forEach(items => {
                i++
                team.push({['home']: matchdata[i].home_team
                  ,['away']: matchdata[i].away_team
                  ,['group']:matchdata[i].group
                  ,['local_date']:matchdata[i].local_date
                  ,['home_flag']:matchdata[i].home_flag
                  ,['away_flag']:matchdata[i].away_flag
                }  
              )
            });

            let num = -1;
            let result = {}
            team.forEach((items)=>{
                num++
                result['result'+(num+1)] = items.home+" "+body['team'+(num+1)+'score']+" - "+body['team'+(num+2)+'score']+" "+items.away
            })
            result.playerId = body.playerId,
            console.log(result)
            let create = await matchscore.create(result)
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