/*
 * Licensed under TesterPRO license, all rights reserved 2019.
 * Created by KoolJ, aka koolj@testerpro.org.
 * Feb 8, 2019.
 */
const express = require('express')
const app = express()
var path = require('path');
const { PORT } = require('./helpers/utility')
//const restify = require('restify');
//require plugins
//require('restify').plugins;
//Nhúng middleware body-parser vào Express
const bodyParser = require('body-parser')
var helmet = require('helmet')
app.use(helmet())

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message:
    "ASTA said: Too many requests from this IP, please try again after 15 minutes!!!"
});

//app.use(limiter);


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Tuỳ biến Router
const usersRouter  = require('./routers/usersRouter')
app.use('/api', usersRouter)
app.use(express.static(__dirname + '/asta'));

//https
const https = require("https"),
  fs = require("fs");
/*
const options = {
  key: fs.readFileSync("/etc/nginx/ssl/key.key"),
  cert: fs.readFileSync("/etc/nginx/ssl/crt.crt")
};
*/

//Start server
app.use(function(req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Origin', 'https://asta.red');
    res.append('Access-Control-Allow-Origin', 'https://asta.red:3000');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
})

app.use((req, res) => {
  res.writeHead(200);
  res.end("hello world\n");
});
//app.listen(8076);
//https.createServer(options, app).listen(8078);
