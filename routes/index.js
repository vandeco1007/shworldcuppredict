
const account = require('./account.router')
const matchscore = require('./matchscore.router')
const matchbydate = require('./matchbydate.router')
const errorHandle= require("../middlewares/errorHandle")
const test = require('./test.router')
module.exports = (app)=>{
    app.get('/',(req,res,next)=>{
        res.send('Matchpredict ATT 0.0.1 BETA')
    })
    app.use('/account', account)
    app.use('/match', matchscore)
    app.use('/matchbydate', matchbydate)
    app.use('/test', test)
    app.use(errorHandle)
}
