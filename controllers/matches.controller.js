const matches = require('../models/matches.model')

module.exports = {
  getMatchByDate: async(req,res,next)=>{
    let {...body} = req.body
    let getMatch = await matches.find({ local_date: body.date}).exec()
    res.json(getMatch)
  },
  getAllMatches: async(req,res,next)=>{
    try {
      let allMatches = await matches.find()
      res.json(allMatches)
    } catch (error) {
      console.log(error)
    }
  },
  createMatch: async(req,res,next)=>{
    let {...body} = req.body
    try {
      let create = await matches.create(body)
      res.json(create)
    } catch (error) {
      console.log(error)
    }
  }
}
    
    