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

router(app)
connectDb()

app.listen(3000,()=>{
    console.log("Server running at port 3000")
})
