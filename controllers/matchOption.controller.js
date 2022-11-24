const matchoption = require('../models/option.model')

module.exports = {
    getOption: async(req,res,next)=>{
        try {
            let option = await matchoption.find()
            res.json(option[0])
        } catch (error) {
            res.json(error)
        }
    },
    createOption: async(req,res,next)=>{
        let {...body} = req.body
        let check = await matchoption.find()
        if(check[0]==undefined){
            console.log(check)
            let create = await matchoption.create(
                {
                    "matchStatus1": "state="+body.matchStatus1,
                    "starTime1": body.starTime1,
                    "team1Name": body.team1Name,
                    "team1Image": "style=background:url("+body.team1Image+")",
                    "team2Name": body.team2Name,
                    "team2Image": "style=background:url("+body.team2Image+")",
                    "matchStatus2":  "state="+body.matchStatus2,
                    "starTime2": body.starTime2,
                    "team3Name": body.team3Name,
                    "team3Image": "style=background:url("+body.team3Image+")",
                    "team4Name": body.team4Name,
                    "team4Image": "style=background:url("+body.team4Image+")",
                    "matchStatus3": "state="+body.matchStatus3,
                    "starTime3": body.starTime3,
                    "team5Name": body.team5Name,
                    "team5Image": "style=background:url("+body.team5Image+")",
                    "team6Name": body.team6Name,
                    "team6Image": "style=background:url("+body.team6Image+")",
                    "matchStatus4": "state="+body.matchStatus4,
                    "starTime4": body.starTime4,
                    "team7Name": body.team7Name,
                    "team7Image": "style=background:url("+body.team7Image+")",
                    "team8Name": body.team8Name,
                    "team8Image": "style=background:url("+body.team8Image+")",
                }
            )
            res.json(create)
        }else{
            console.log("this is check id: "+check[0]._id)
            let updateValue = {
                "matchStatus1": "state="+body.matchStatus1,
                "starTime1": body.starTime1,
                "team1Name": body.team1Name,
                "team1Image": "style=background:url("+body.team1Image+")",
                "matchStatus2":  "state="+body.matchStatus2,
                "starTime2": body.starTime2,
                "team2Name": body.team2Name,
                "team2Image": "style=background:url("+body.team2Image+")",
                "matchStatus3":  "state="+body.matchStatus3,
                "starTime3": body.starTime3,
                "team3Name": body.team3Name,
                "team3Image": "style=background:url("+body.team3Image+")",
                "matchStatus4": "state="+body.matchStatus4,
                "starTime4": body.starTime4,
                "team4Name": body.team4Name,
                "team4Image": "style=background:url("+body.team4Image+")",
                "matchStatus5": "state="+body.matchStatus5,
                "starTime5": body.starTime5,
                "team5Name": body.team5Name,
                "team5Image": "style=background:url("+body.team5Image+")",
                "matchStatus6": "state="+body.matchStatus6,
                "starTime6": body.starTime6,
                "team6Name": body.team6Name,
                "team6Image": "style=background:url("+body.team6Image+")",
                "matchStatus7": "state="+body.matchStatus7,
                "starTime7": body.starTime7,
                "team7Name": body.team7Name,
                "team7Image": "style=background:url("+body.team7Image+")",
                "matchStatus8": "state="+body.starTime8,
                "starTime8": body.team8Name,
                "team8Name": body.team8Name,
                "team8Image": "style=background:url("+body.team8Image+")",
            }
        
            let update = await matchoption.findOneAndUpdate({_id:check[0]._id},updateValue,{new:true})
            res.json(update)
        }
    },
    deleteOption: async(req,res,next)=>{
        try {
            let del = await matchoption.deleteMany({})
            res.json(del)
        } catch (error) {
            res.json(error)
        }
    }
}
