const jwt= require("jsonwebtoken")
const accountModel= require("../models/account.model")
const ErrorResponse= require("./errorHandle")

module.exports= async(req, res, next)=>{
  const {authorization}= req.headers
  if (!authorization){
    return res.json({
      statusCode: 500,
      message: "Cần truyền header chứa jwt lên"
    })
  }
  const token= authorization;
  const decode= jwt.verify(token, "abcdef");
  const account= await accountModel.findById(decode._id); 
  if (!account){
    console.log(req.headers.authorization)
  }
  console.log(decode)
  req.account= account;
  next();
}