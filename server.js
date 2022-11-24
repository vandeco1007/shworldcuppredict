const exrpess = require('express')
const app = exrpess()
const router = require('./routes')
const connectDb = require('./config/database')

app.use(exrpess.json())
app.use(exrpess.urlencoded({extended:false}))
app.use(exrpess.static('./public'))

app.set('view engine', 'ejs')
app.set('views', './views')

router(app)
connectDb()

app.listen(3000,()=>{
    console.log("Server running at port 3000")
})

            // let team1 = []
            // let result1 = []
            // let team2 = []
            // let result2 = []
            // let team3 = []
            // let result3 = []
            // let team4 = []
            // let result4 = []
            // if(body.team1==''){
            //     team2[0] = checklist.team2
            // }else{
            //     team2[0] = body.team1
            // }
            // console.log(body)