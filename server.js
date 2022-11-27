const exrpess = require('express')
const cors = require('cors')
const app = exrpess()
const router = require('./routes')
const Fingerprint = require('express-fingerprint')
const connectDb = require('./config/database')

app.use(exrpess.json())
app.use(cors())
app.use(exrpess.urlencoded({extended:false}))
app.use(exrpess.static('./public'))

app.set('view engine', 'ejs')
app.set('views', './views')
app.set('trust proxy', true)
 
app.use(Fingerprint({
    parameters:[
        Fingerprint.useragent,
        Fingerprint.acceptHeaders,
        Fingerprint.geoip,
    ]
}))
 
app.get('/fp',function(req,res,next) {
    console.log(req.fingerprint)
    res.json(req.fingerprint.hash)
})

app.get("/ip", function (req, res) {
    console.log(req.socket.remoteAddress);
    console.log(req.ip);
    res.send(req.ip);
});

router(app)
connectDb()

app.listen(3000,()=>{
    console.log("Server running at port 3000")
})
