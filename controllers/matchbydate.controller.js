const matches = require('../models/matches.model')

module.exports = {
  callMatch: async(req,res,next)=>{
    let {...body} = req.body
    
    let getMatch = await matches.find({ local_date: req.body.date}).exec()
    res.json(getMatch)
  }
}
    
    