const mongoose = require('mongoose')
const connectDb = async()=>{
    try {
        await mongoose.connect("mongodb+srv://shbetkhuyenmai:789bet1@cluster0.efvrpw3.mongodb.net/?retryWrites=true&w=majority")
        console.log('Database connect successfully')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb

