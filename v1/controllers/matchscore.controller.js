const matchscore = require('../../models/matchscore.model')
const new_matchscore = require('../../models/new_matchscore.model')
const matchscore_789 = require('../../models/789_matchscore.model')
const jun_matchscore = require('../../models/jun_matchscore.model')
const hi_matchscore = require('../../models/hi_matchscore.model')
const f8_matchscore = require('../../models/f8_matchscore.model')
const match = require('../../middlewares/matchbydate.middleware')
const path = {
    sh: matchscore,
    new: new_matchscore,
    bet789: matchscore_789,
    jun88: jun_matchscore,
    hi88: hi_matchscore,
    f8bet: f8_matchscore
}
module.exports = {
    createRecord: async(req,res,next)=>{
        let {...body} = req.body
        let data = path[req.query.path]
        let playerId = body.playerId.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\s\{\}\[\]\\\/]/gi, '')
        try {
            let check = await data.findOne({ 'playerId': playerId,"createDate": body.date})
            let matchdata = await match(body.date)
            if(check){
                console.log(check.createDate+""+body.date)
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
        let {...query} = req.query
        let data = path[req.account.site]
        let {...body} = req.body
        try {
            let record = await data.find().limit(query.limit*1).skip((query.offset-1)*query.limit)
            let recordLenght = await data.count()
            if(record){
                res.json({
                    page:Math.ceil(recordLenght/query.limit),
                    count: recordLenght,
                    data: record
                })
            }else{
                res.json({
                    code:404,
                    mess:"record not found"
                })
            }
        } catch (error) {
            console.log(error)
            res.render("failure",{result:"C?? l???i trong qu?? tr??nh truy c???p, qu?? kh??ch vui l??ng ki???m tra l???i sau ??t ph??t."})
        }
    },
    readBydate: async(req,res,next)=>{
        let {...query} = req.query
        let data = path[req.account.site]
        console.log(req.body.date)
        try {
            let record = await data.find({createDate:req.body.date}).limit(query.limit*1).skip((query.offset-1)*query.limit)
            let recordLenght = await data.find({createDate:req.body.date}).count()
            if(record){
                res.json({
                    page:Math.ceil(recordLenght/query.limit),
                    count: recordLenght,
                    data: record
                })
            }else{
                res.json({
                    code:404,
                    mess:"record not found"
                })
            }
        } catch (error) {
            console.log(error)
            res.render("failure",{result:"C?? l???i trong qu?? tr??nh truy c???p, qu?? kh??ch vui l??ng ki???m tra l???i sau ??t ph??t."})
        }
    },
    findPlayer: async(req,res,next)=>{
        let data = path[req.account.site]
        try {
            let record = await data.find({playerId:req.body.playerId})
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
            res.render("failure",{result:"C?? l???i trong qu?? tr??nh truy c???p, qu?? kh??ch vui l??ng ki???m tra l???i sau ??t ph??t."})
        }
    },
    deleteRecord: async(req,res,next)=>{
        try {
            let data = path[req.account.site]
            let del = await data.deleteMany({})
            res.json(del)
        } catch (error) {
            res.json(error)
        }
    },
    deleteByDate: async(req,res,next)=>{
        try {
            let data = path[req.account.site]
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
    let playerId = body.playerId.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\s\{\}\[\]\\\/]/gi, '')
    result.playerId = playerId
    result.createDate = body.date
    result.ip = body.ip
    result.fp = body.fp
    team.forEach((item)=>{
        n++
        odd+=2
        even+=2
        result['result'+n] = item.home+" "+body['team'+odd+'score']+" - "+body['team'+even+'score']+" "+item.away
    })
    let create = await path.create(result)
    res.json(create)
}