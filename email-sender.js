// install nodemailer

//include nodemailer in your application
var nodemailer = require('nodemailer')


//send email from your server
var mailTransporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user: //'userName @gmail.com',
        pass: //'password'
    }
});

var mailOptions = {
    from: //'userName@gmail.com',
    to: //'friend's Email@gmail.com',
    subject: 'Sending emails using Node.js',
    text: 'This is quite interesting'
}

mailTransporter.sendMail(mailOptions, (error, info) => {
    (error) ? console.log(error) : console.log('Email sent:' + info.response);
})