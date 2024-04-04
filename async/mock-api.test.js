jest.mock("axios");
import axios from "axios";

// import subject module
import { fetchPokemons } from "./fetchPokemons";

describe('mock-api', () => {
    test('It fetches pokemons', async () => {
        // mocked data
        const pokemons = [
            { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
            { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
        ];
        const resp = { data: pokemons };
        axios.get.mockResolvedValue(resp);

        
        try {
            const response = await fetchPokemons(pokemons);
            const fetchedPokemons = response;
            
            expect(fetchedPokemons).toHaveLength(pokemons.length);
            expect(fetchedPokemons).toEqual(pokemons);
        } catch (ex) {
            expect(ex).toBeInstanceOf(Error);
            console.error(ex);
        }
    });

})