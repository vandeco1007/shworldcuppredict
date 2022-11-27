const matchscore = require('../models/matchscore.model')
const new_matchscore = require('../models/new_matchscore.model')
const matchscore_789 = require('../models/789_matchscore.model')
const match = require('../middlewares/matchbydate.middleware')
const path = {
    sh: matchscore,
    new: new_matchscore,
    bet789: matchscore_789
}
module.exports = {
    ///SHBET
    createRecord: async(req,res,next)=>{
        let {...body} = req.body
        let data = path[req.query.path]
        try {
            let check = await data.findOne({ 'playerId': body.playerId })
            let matchdata = await match(body.date)
            console.log(body.date)
            if(check){
                if(check.createDate!=body.date){
                    verified(matchdata,data,body,res)
                }else{
                    res.json({
                        code:403,
                        mess:"Dupplicate"
                    })
                }
            }else{
                verified(matchdata,data,body,res)
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
        let data = path[req.query.path]
        let {...body} = req.body
        try {
            let record = await data.find()
            if(record){
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
    },
    readBydate: async(req,res,next)=>{
        let data = path[req.query.path]
        try {
            let record = await data.find({createDate:req.body.date})
            if(record){
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
    },
    deleteRecord: async(req,res,next)=>{
        try {
            let data = path[req.query.path]
            let del = await data.deleteMany({})
            res.json(del)
        } catch (error) {
            res.json(error)
        }
    },
    deleteByDate: async(req,res,next)=>{
        try {
            let data = path[req.query.path]
            console.log(req.query.date)
            let del = await data.deleteMany({createDate:req.query.date})
            res.json(del)
        } catch (error) {
            res.json(error)
        }
    }
}

const verified = async(matchdata,path,body,res)=>{
    let i = -1
    let n = 0
    let odd = -1
    let even = 0
    homeTeam = {}
    let team = []
    let result = {}
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
    result.playerId = body.playerId
    result.createDate = body.date
    result.ip = body.ip
    result.fp = body.fp

    team.forEach((item)=>{
        n++
        odd+=2
        even+=2
        console.log(odd+"-"+even)
        result['result'+n] = item.home+" "+body['team'+odd+'score']+" - "+body['team'+even+'score']+" "+item.away
    })
    console.log(result)    
    let create = await path.create(result)
    res.json(create)
}