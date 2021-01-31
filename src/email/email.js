const nodemailer = require('nodemailer');
const { keys } = require('../config/keys.config');
const { pugEngine } = require("nodemailer-pug-engine");

class Email {
  constructor() {
    this.transporter = this.smtpConfig();
    this.transporter.use('compile', pugEngine({
      templateDir: __dirname + '/templates',
    }));
  }

  smtpConfig() {
    return nodemailer.createTransport({
      host: keys.get('HOST_SMTP'),
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: keys.get('USER_SMTP_AWS'), // generated ethereal user
        pass: keys.get('PASSWORD_SMTP_AWS'), // generated ethereal password
      },
    });
  }

  async sendEmail(to, subject, message) {
    await this.transporter.sendMail({
      from: 'kmelan1945@gmail.com', // sender address
      to, // list of receivers
      subject, // Subject line
      template: 'create-pokemon',
      ctx: {
        message
      }
    });
  }
}

module.exports = {
  Email
}
