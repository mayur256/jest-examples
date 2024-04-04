import axios from "axios";

export function fetchPokemons(pokemonCount = 150) {
    return new Promise((resolve, reject) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonCount}`)
            .then(response => resolve(response.data))
            .catch(err => reject(err));
    })
}

// fetchPokemons();
