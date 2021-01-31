const { Router } = require('express');
const { getPokemons } = require('../controllers/get-pokemons.controller');
const { createPokemon } = require('../controllers/create.pokemon.controller');

const router = Router();

router.get('/pokemons', getPokemons);
router.post('/pokemons', createPokemon);

module.exports = router;
