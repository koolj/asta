/*
 * Licensed under TesterPRO license, all rights reserved 2019.
 * Created by KoolJ, aka koolj@testerpro.org.
 * Feb 8, 2019.
 */
const mongoose = require('mongoose')
//Kết nối CSDL MongoDB
const connectDatabase = async () => {
    try {
        let uri = 'mongodb://adm2:Wwedfsd4!134BVDsds@localhost:27017/astaauth'
        let options = {
            connectTimeoutMS: 10000,// 10 giây
			useNewUrlParser: true,
			useCreateIndex: true,
        }
	//debugger;
        await mongoose.connect(uri, options)
        console.log('Connect Mongo Database successfully')

    } catch(error) {
        console.log(`Cannot connect Mongo. Error: ${error}`)
    }
}
connectDatabase()
module.exports = {
    mongoose
}
