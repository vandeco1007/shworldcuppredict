const matches = require('../models/matches.model')

module.exports = {
  callMatch: async(req,res,next)=>{
    let {...body} = req.body
    let month = new Date().getMonth()+1
    let date = new Date().getDate()
    let year = new Date().getFullYear()
    let getMatch = await matches.find({ local_date: month+'/'+date+'/'+year}).exec()
    res.json(getMatch)
  }
}
    
    