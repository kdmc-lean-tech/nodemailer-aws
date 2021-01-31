const express = require('express');
const { Database } = require('../database/database');
const { keys } = require('../config/keys.config');
const path = require('path');


class Server {
  constructor() {
    this.port = keys.get('PORT') || 3000;
    this.app = express();
    this.database = new Database();
    this.middlewares();
    this.initDatabase();  
  }

  initDatabase() {
    this.database.connect('mongodb://localhost:27017/pokemon');
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(path.resolve(__dirname, '../../public')));
    this.app.set('view engine', 'pug');
    this.app.use(require('../routes/pokemon.route'));
  }

  execute(callback) {
    this.app.listen(this.port, callback(this.port));
  }
}

module.exports = {
  Server
};
