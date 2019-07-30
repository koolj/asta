/*
 * Licensed under TesterPRO license, all rights reserved 2019.
 * Created by KoolJ, aka koolj@testerpro.org.
 * Feb 8, 2019.
 */
const nodemailer = require('nodemailer')
const PORT = 8078
const sendEmail = async (receiverEmail, secretKey) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "asta@testerpro.org",
                pass: "abc@12345"
            }
        })
        let mailOptions = {
            from: '"ASTA Admin" <koolj@testerpro.org>', //Email người gửi
            to: receiverEmail,
            subject: '[ASTA] Tham gia event',      
            html: `
Dear ABC,

Mời bạn tham gia chương trình...

Cám ơn các bạn đã tham gia sử dụng ứng dụng!
Mọi góp ý xin reply lại mail này hoặc đưa vào mục báo cáo vấn đề trên site.

ASTA team,
Admin.

		<h1>Click link below to activate:</h1>
                   http://${require('os').hostname()}:${PORT}/users/activateUser?secretKey=${secretKey}&email=${receiverEmail}
		<br><br>BNet Admin.`
        }
        let info = await transporter.sendMail(mailOptions)
        console.log('Message sent: %s', info.messageId);
    } catch(error) {
        throw error
    }
}
module.exports = {
    sendEmail,
    PORT
}
