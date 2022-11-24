const matchscore = require('../models/matchscore.model')
const jsonTocsv = require('json-to-csv-export')

module.exports = {
    getData: async(req,res,next)=>{
        try {
            let data = await matchscore.find()
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    deleteData: async(req,res,next)=>{
        try {
            let del = await matchscore.deleteMany({})
            res.json(del)
        } catch (error) {
            res.json(error)
        }
    }
}