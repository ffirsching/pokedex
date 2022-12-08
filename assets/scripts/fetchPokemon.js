export function fetchPokemon() {
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');
}