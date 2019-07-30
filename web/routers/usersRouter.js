/*
 * Licensed under TesterPRO license, all rights reserved 2019.
 * Created by KoolJ, aka koolj@testerpro.org.
 * Feb 8, 2019.
 */
const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const { 
	insertUser, 
	activateUser, 
	verifyJWT,
	loginUser,
        searchKeyword,
        postBook,
        postBookNQ,
        getBook
} = require('../database/models/User')

router.use((req, res, next) => {
    console.log('Time: ', Date.now()) //Time log
    next()
})
var path    = require("path");

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/asta/index.html'));
  //__dirname : It will resolve to your project folder.
});
router.post('/postbooknq', async (req, res) =>{
    let {title, author, vol} = req.body    
    
    try {
        let rep = await postBookNQ(title, author, vol)
                res.json({
                        status: 0,
                        result: rep
                })

    } catch(error) {
            res.json({
            status: 1,
            result: `${error}`
            })
    }
})
router.post('/postbook', async (req, res) =>{
    let {title, author, vol} = req.body    
    
    try {
        let rep = await postBook(title, author, vol)
                res.json({
                        status: 0,
                        result: rep
                })

    } catch(error) {
            res.json({
            status: 1,
            result: `${error}`
            })
    }
})

router.get('/getbook', async (req, res) =>{
   
    try {
        let rep = await getBook()
                res.json({
                        status: 0,
                        result: rep
                })

    } catch(error) {
            res.json({
            status: 1,
            result: `${error}`
            })
    }
})



router.post('/getFB', async (req, res) =>{
    let {scope, keyword, token} = req.body    
    
    try {
        //debugger;
        //if(validateEmail(email)){
        let rep = await searchKeyword(scope, keyword, token)
        //if(rep.length > 0){
                res.json({
                        status: 0,
                        result: rep[0],
                        meta: rep[1]
                })
        //}       
        //}
        //else
        //{throw 'Sai định dạng email!'}
    } catch(error) {
            res.json({
            status: 1,
            result: `${error}`
            })
    }
})




router.post('/registerUser', async (req, res) =>{
    let {name, email, password} = req.body    
    
    function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }
    try {
        //debugger;
        if(validateEmail(email)){
        await insertUser(name, email, password)
                res.json({
                        result: 'ok',
                        message: 'Đăng ký user thành công!'
                })		
        }
        else
        {throw 'Sai định dạng email!'}
    } catch(error) {
            res.json({
            result: 'failed',
            message: `Không thể đăng ký thêm user. Lỗi : ${error}`
            })
    }
})
//router để kích hoạt user
//VD:
//http://Nguyens-iMac:3000/users/activateUser?secretKey=$2b$10$U4iDuK4aJ0.QSvVfRy8g/uvmSCUB0B8KfX75uUj8qr3xudHXcDG7y&email=nodejst9@gmail.com
router.get('/activateUser', async (req, res) =>{	
	let {email, secretKey} = req.query	
	try {
		await activateUser(email, secretKey)
		res.send(`<h1 style="color:MediumSeaGreen;">Kích hoạt User thành công</h1>`)
	} catch(error) {
		res.send(`<h1 style="color:Red;">Không kích hoạt được User, lỗi: ${error}</h1>`)
	}
})
router.post('/loginUser', async (req, res) =>{	
	let {email, password} = req.body
    try {
		let tokenKey = await loginUser(email, password)
		res.json({
			result: 'ok',
			message: 'Đăng nhập user thành công',
			tokenKey
	  	})
	} catch(error) {
		res.json({
            result: 'failed',
            message: `Không thể đăng nhập user. Lỗi : ${error}`
        })
	}
})
//Viết 1 api để test "tokenKey"
router.get('/jwtTest', async (req, res) => {		
	let tokenKey = req.headers['x-access-token']
    try {
		//Verify token
		await verifyJWT(tokenKey)
		res.json({
			result: 'ok',
			message: 'Verify Json Web Token thành công',	  		
	  	})	
	} catch(error) {
		res.json({
            result: 'failed',
            message: `Lỗi kiểm tra token : ${error}`
        })
	}
})
module.exports = router
