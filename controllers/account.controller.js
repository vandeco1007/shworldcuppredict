const account = require('../models/account.model')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')

module.exports = {
    getAllAccount: async(req,res,next)=>{
        let getAcc = await account.find()
        res.json(getAcc)
    },
    signup: async(req,res,next)=>{
        let {...body} = req.body
        try {
            let createAccount = await account.create(body)
            res.json(createAccount)
        } catch (error) {
            res.json(error)
        }
    },
    login: async(req,res,next)=>{
        let {...body} = req.body
        let loginAccount = await account.findOne({username:body.username})
        if(!loginAccount){
            res.json({
                code:404,
                mess:"Không tìm thấy tài khoản - Account not found!"
            })
        }
        
        let checkPassword = bcryptjs.compareSync(body.password, loginAccount.password)

        if(checkPassword){
            let token = jwt.sign({
                _id: account._id,
                username:account.username,
                role:account.role
            },"789Bet#1",{expiresIn:"1h"})
            res.status(200).json({
                statusCode:200,
                message: "Đăng nhập thành công - Login Successfully",
                jwt: token
            })
        }else{
            res.json({
                statusCode: 400,
                message:"Sai tài khoản hoặc mật khẩu"
            })
        }
    }
}