const mongoose = require('mongoose');

class Database {
  connect(url) {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }, (err) => {
      err ? console.log(`Database Error ${ err }`) : console.log(`Databse Online`);
    });
  }
}

module.exports = {
  Database
}
