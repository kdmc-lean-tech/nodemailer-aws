const Pokemon = require('../models/pokemon.model');
const { Email } = require('../email/email');

module.exports = {
  createPokemon: async (req, res) => {
    const email = new Email();
    const { attack, defense, name, description } = req.body;
    const statistics = { attack, defense };
    const pokemon = {
      name,
      description,
      statistics
    }
    try {
      const newPokemon = new Pokemon(pokemon);
      await newPokemon.save();
      try {
        await email.sendEmail('kevin.melan00@usc.edu.co', 'New Pokemon Created !!!', `Hello, a new pokemon named ${ name } has just been created!!!!!`);
        return res.status(201).json({
          pokemon: newPokemon
        });
      } catch (error) {
        return res.status(500).json({
          message: 'Internal Server Error'
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: 'Internal Server Error'
      });
    }
  }
}
