const account = require('./account.router')
const matchscore = require('./matchscore.router')
const matchscorev1 = require('../v1/routes/matchscore.router')
const matchbydate = require('./matches.router')
const errorHandle= require("../middlewares/errorHandle")
const test = require('./test.router')
module.exports = (app)=>{
    app.get('/',(req,res,next)=>{
        res.send('Matchpredict ATT 0.0.1 BETA')
    })
    app.get('/system/time',(req,res,next)=>{
        let date = new Date().getTime()
        res.json({
            servertime: date
        }) 
    })
    app.use('/account', account)
    app.use('/matchscore', matchscore)
    app.use('/api/v1/matchscore', matchscorev1)
    app.use('/matches', matchbydate)
    app.use('/test', test)
    app.use(errorHandle)
}
