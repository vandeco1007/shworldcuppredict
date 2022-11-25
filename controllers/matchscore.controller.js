const matchscore = require('../models/matchscore.model')
const match = require('../middlewares/matchbydate.middleware')
module.exports = {
    createRecord: async(req,res,next)=>{
        let {...body} = req.body
        try {
            let check = await matchscore.findOne({ 'playerId': body.playerId })
            let matchdata = await match(body.date)
            console.log(body.date)
            if(check){
                if(check.createDate!=body.date){
                    notification(matchdata,body,res)
                }else{
                    res.json({
                        code:403,
                        mess:"Dupplicate"
                    })
                }
            }else{
                notification(matchdata,body,res)
            }
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

const notification = async(matchdata,body,res)=>{
    let i = -1
    homeTeam = {}
    let team = []
    matchdata.forEach(items => {
        i++
        team.push({['home']: matchdata[i].home_team
          ,['away']: matchdata[i].away_team
          ,['home_score']:matchdata[i].home_score
          ,['away_score']:matchdata[i].away_score
          ,['group']:matchdata[i].group
          ,['local_date']:matchdata[i].local_date
          ,['home_flag']:matchdata[i].home_flag
          ,['away_flag']:matchdata[i].away_flag
        }  
      )
    });
    let create = await matchscore.create({
        playerId: body.playerId,
        createDate: body.date,
        result1: team[0].home+" "+body.team1score+" - "+body.team2score+" "+team[0].away,
        result2: team[1].home+" "+body.team3score+" - "+body.team4score+" "+team[1].away,
        result3: team[2].home+" "+body.team5score+" - "+body.team6score+" "+team[2].away,
        result4: team[3].home+" "+body.team7score+" - "+body.team8score+" "+team[3].away
    })
    res.json(create)
}