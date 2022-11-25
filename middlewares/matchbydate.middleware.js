const matches = require('../models/matches.model')

module.exports = ()=>{
  let month = new Date().getMonth()+1
  let date = new Date().getDate()
  let year = new Date().getFullYear()
  return matches.find({ local_date: month+'/'+date+'/'+year}).exec()    
}