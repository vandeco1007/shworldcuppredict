const exrpess = require('express')
const cors = require('cors')
const app = exrpess()
const router = require('./routes')
const connectDb = require('./config/database')

app.use(exrpess.json())
app.use(cors())
app.use(exrpess.urlencoded({extended:false}))
app.use(exrpess.static('./public'))

app.set('view engine', 'ejs')
app.set('views', './views')

app.get("/ip", function (req, res) {
    console.log(req.socket.remoteAddress);
    console.log(req.ip);
    res.send("your IP is: " + req.ip);
});

router(app)
connectDb()

app.listen(3000,()=>{
    console.log("Server running at port 3000")
})
