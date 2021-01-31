const dotenv = require('dotenv');
dotenv.config();

const keys = new Map();

keys.set('PORT', process.env.PORT);
keys.set('PASSWORD_SMTP_AWS', process.env.PASSWORD_SMTP_AWS);
keys.set('USER_SMTP_AWS', process.env.USER_SMTP_AWS);
keys.set('HOST_SMTP', process.env.HOST_SMTP);

module.exports = {
  keys
}
