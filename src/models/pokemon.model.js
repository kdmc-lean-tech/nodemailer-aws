const { Schema, model } = require('mongoose');

const Statistics = new Schema({
  attack: {
    type: Number,
    required: true
  },
  defense: {
    type: Number,
    required: true
  }
});

const PokemonSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  statistics: {
    type: Statistics
  }
});

module.exports = model('Pokemon', PokemonSchema);
