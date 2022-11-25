const matches = require('../models/matches.model')

module.exports = (date)=>{
  return matches.find({ local_date: date}).exec()    
}