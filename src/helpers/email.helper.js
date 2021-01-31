const nodemailer = require('nodemailer');
const { keys } = require('../config/keys.config');

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: keys.get('HOST_SMTP'),
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: keys.get('USER_AWS'), // generated ethereal user
      pass: keys.get('PASSWORD_SMTP_AWS'), // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'kmelan1945@gmail.com', // sender address
    to: "kmelan@lean-tech.io, kevin.melan00@usc.edu.co", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);