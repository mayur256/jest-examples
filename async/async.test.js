// import subject module
import { fetchPokemons } from "./fetchPokemons";

/**
 * @description - an api that fetches a list of records
 * @note - return a promise from the test. The test waits on the promise until is resolved or timeout occurs
 * the test passes when promise resolves with expected values and must fail otherwise
 */
test('Calls an API to fetch pokemons with promises', () => {
    const pokemons = 50;
    return fetchPokemons(pokemons)
        .then(data => {
            const fetchedPokemons = data.results;
            // API returns only requested number of records
            expect(fetchedPokemons).toHaveLength(pokemons);
        })
        .catch(err => console.error(err))
})

test('Calls an APi to fetch pokemons with async/await', async () => {
    const pokemons = 25;
    try {
        const response = await fetchPokemons(pokemons);
        const fetchedPokemons = response.results;
        expect(fetchedPokemons).toHaveLength(pokemons);
    } catch (ex) {
        expect(ex).toBeInstanceOf(Error);
        console.error(ex);
    }
});