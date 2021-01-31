const Pokemon = require('../models/pokemon.model');

module.exports = {
  getPokemons: async (req, res) => {
    const pokemons = await Pokemon.find();
    res.status(200).json({
      pokemons
    });
  }
}
