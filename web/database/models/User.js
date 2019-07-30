/*
 * Licensed under TesterPRO license, all rights reserved 2019.
 * Created by KoolJ, aka koolj@testerpro.org.
 * Feb 8, 2019.
 */
const {mongoose} = require('../database')
//const bcrypt = require('bcrypt')
const {sendEmail} = require('../../helpers/utility')
const jwt = require('jsonwebtoken')//Mã hoá 1 jsonObject thành token(string)
const secretString = "secret string"//tự cho 1 string tuỳ ý
const {Schema} = mongoose
const UserSchema = new Schema({
    //schema: cấu trúc của 1 collection 
    name: {type: String, default: 'unknown', unique: true},    
    email: {type: String, match:/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, unique: true},
    password: {type: String, required: true},    
    active: {type: Number, default: 1}, //inactive  
})

var aws = require('aws-sdk');
var fs  = require('fs');
// load aws config
aws.config.loadFromPath(__dirname + '/aws-config.json')
// create the sqs service object
var sqs = new aws.SQS()
var queueURL = 'https://sqs.ap-southeast-1.amazonaws.com/281982043102/ap-se-1-queue'
    
//promise POST data from query
function postBookNOsqs(title, author, vol)
{
    return new Promise(function(resolve, reject) {
        //var rep = [0,0];
        var timeunix = Math.floor(new Date() / 1000);
        var randomnum = Math.floor(Math.random() * (999999999 - 1) + 1)
        var data = 'Sách mới ' + title +' #'+ timeunix + ' rannq_'+ randomnum

        chat_bucket.insert(data, {'book': data}, function(err, result) {
            if (!err) {
                console.log("SAVE TO DB...." + data)
                return resolve(result.cas);
            } else {

                console.error("Couldn't store document: %j", err);
                return reject(err);
            }
        });
    });
}
function postBooksqs(title, author, vol)
{
    return new Promise(function(resolve, reject) {
        //var rep = [0,0];
        var timeunix = Math.floor(new Date() / 1000);
        var randomnum = Math.floor(Math.random() * (999999999 - 1) + 1)
        var qParams = {
             MessageBody: 'Sách mới ' + title +' #'+ timeunix+ ' ran_'+ randomnum,
             QueueUrl: queueURL
            }          
        sqs.sendMessage(qParams, function(err, data) {
            if (err) {
                return reject(err);
            } else {
                console.log("QUEUE...." + 'Sách mới ' + title +' #'+ timeunix+ ' ran_'+ randomnum)
                console.log(data)
                getAllBook();
                return resolve(data)
            }   
        }) 
        
    });
}

//getMessage sqs
function getAllBook(){
    var currentNUmMess = 1
    var params = {
        AttributeNames: [
            "ApproximateNumberOfMessages"
        ],
        QueueUrl: queueURL
    };
    //check # messages in queue
    sqs.getQueueAttributes(params, function(err, data) {
        if (err) {
            //return err
            return reject(err);
        }else{
            currentNUmMess = parseInt(data.Attributes.ApproximateNumberOfMessages)
            console.log("Current #MESS...." + currentNUmMess)
            
            //loop until all mess in queue are out
            for (var i = 0; i < currentNUmMess ; i++){
                //new Promise(function(resolve, reject) {
                    sqs.receiveMessage(params, function(err, data) {
                        console.log("Received...." + data.Messages[0].MessageId)
                        if (err) {
                            return err
                            //return reject(err);
                        } else {
                            var savedatavar = data.Messages[0].Body + "_" + data.Messages[0].MessageId
                            //push to DB
                            toDB(savedatavar)
                            
                            //delete message in queue
                            deleteMessage(data.Messages[0].ReceiptHandle)
                            return data          
                            //return resolve(data)
                        }
                    }) 
                //});
            }
        };
    
    })

}
function deleteMessage(data)
{
    return new Promise(function(resolve, reject) {
        //var rep = [0,0];
        var timeunix = Math.floor(new Date() / 1000);
        var qParams = {
             QueueUrl: queueURL,
             ReceiptHandle: data
            }          
        sqs.deleteMessage(qParams, function(err, data) {
            if (err) {
                return reject(err);
            } else {
                console.log("DELETED...." + data)
                return resolve(data)
            }   
        }) 
        
    });
}

//push to DB
function toDB(data){
    return new Promise(function(resolve, reject) {
        chat_bucket.insert(data, {'book': data}, function(err, result) {
            if (!err) {
                console.log("SAVE TO DB...." + data)
                return resolve(result.cas);
            } else {

                console.error("Couldn't store document: %j", err);
                return reject(err);
            }
        });
        
    });
}
//post Book No SQS
const postBookNQ = async (title, author, vol) => {
    try {

        return postBookNOsqs(title, author, vol);
        
    } catch(error) {
        throw error 
    }
}
//post Book
const postBook = async (title, author, vol) => {
    try {

        return postBooksqs(title, author, vol);
        
    } catch(error) {
        throw error 
    }
}
//get Book
const getBook = async (title, author, vol) => {
    try {

        return await getAllBook();
        
    } catch(error) {
        throw error 
    }
}

        
//promise GET data from query
function getSearchKeywordRecord(sql)
{
    return new Promise(function(resolve, reject) {
        var q = couchbase.N1qlQuery.fromString(sql);
        var rep = [0,0];
        fb_p_bucket.query(q,(err, rows, meta) => {
            if(err){

                return reject(err); 
            }else{
                rep[1] = meta;
                //rsjson = Object.assign({}, rows);
                rep[0] = rows;
                //console.log(meta);
                return resolve(rep);
                
            }
        });

    });
}

//search CouchDB
const searchKeyword = async (scope, keyword, token) => {
    try {

        return getSearchKeywordRecord('SELECT * FROM `fb_ud` LIMIT 10');
        
    } catch(error) {
        throw error 
    }
}



const User = mongoose.model('User', UserSchema)
const insertUser = async (name, email, password) => {
    try {
    	//Mã hoá password trước khi lưu vào DB
       // const encryptedPassword = await bcrypt.hash(password, 10)//saltRounds = 10
        const newUser = new User()
        newUser.name = name
        newUser.email = email
	newUser.active = 1
        newUser.password = password
	//debugger;
        await newUser.save()
       // await sendEmail(email, encryptedPassword)
    } catch(error) {
        //Tự tuỳ chỉnh lại Error
        if (error.code === 11000) {
        	throw "Tên hoặc email đã tồn tại"
        }
        //throw error
    }
}
//Hàm activeUser dùng 1 GET request
//VD:
//http://Nguyens-iMac:3000/users/activateUser?secretKey=$2b$10$U4iDuK4aJ0.QSvVfRy8g/uvmSCUB0B8KfX75uUj8qr3xudHXcDG7y&email=nodejst9@gmail.com
const activateUser = async (email, secretKey) => {
    try {
        let foundUser = await User.findOne({email, password: secretKey})
                                .exec()
        if (!foundUser) {
            throw "Không tìm thấy User để kích hoạt"
        }    
        if (foundUser.active === 0) {
            foundUser.active = 1
            await foundUser.save()            
        } else {
            throw "User đã kích hoạt"//foundUser.active = 1
        }
    } catch(error) {        
        throw error       
    }
}
//Viết hàm login user
const loginUser = async (email, password) => {
    try {
        let foundUser = await User.findOne({email: email.trim()})
                            .exec()
//        debugger;
	if(!foundUser) {
            throw "User không tồn tại"
        }
       // if(foundUser.active === 0) {
       //     throw "User chưa kích hoạt, bạn phải mở mail kích hoạt trước"               
       // }
       // let encryptedPassword = foundUser.password
        //let checkPassword = await foundUser.compare(password, foundUser.password) // await bcrypt.compare(password, encryptedPassword)
        if (foundUser.password === password) {
            //Đăng nhập thành công
            let jsonObject = {
                id: foundUser._id
            }
            const opts = {};
            opts.expiresIn = 120;  //token expires in 2min
            const secret = "asta2019lkjldsfJHIWURsddfjhjllOIOImmnnbUIIUYkjhjawqwe"; //normally stored in process.env.secret
            //const token = await jwt.sign({ email }, secret, opts);	 

            let tokenKey = await jwt.sign(jsonObject, secret, opts);
            return tokenKey;
        }
	else
	{
		throw "Sai Password!"
	}
    } catch(error) {
        throw error
    }
}
const verifyJWT = async (tokenKey) => {
    try {          
        let decodedJson = await jwt.verify(tokenKey, secretString)
        if(Date.now() / 1000 >  decodedJson.exp) {
            throw "Token hết hạn, mời bạn login lại"
        }
        let foundUser = await User.findById(decodedJson.id)
        if (!foundUser) {
            throw "Ko tìm thấy user với token này"
        }
    } catch(error) {
        throw error
    }                 
}
































//build DB connection
var serverUrl = '45.118.145.34';
var couchbase = require('couchbase');
var SearchQuery = couchbase.SearchQuery;
var cluster = new couchbase.Cluster('couchbase://' + serverUrl);
cluster.authenticate('uf2', 'bba123456');

var fb_p_bucket = cluster.openBucket('fb_p');
fb_p_bucket.enableN1ql(serverUrl+":8093")
var chat_bucket = cluster.openBucket('chat_test');
chat_bucket.enableN1ql(serverUrl+":8093")
module.exports = {User, insertUser, activateUser, loginUser, verifyJWT, searchKeyword,postBook,getBook, postBookNQ}








