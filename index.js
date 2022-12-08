import { createEntry } from "./assets/scripts/createEntry.js";
import { fetchPokemon } from "./assets/scripts/fetchPokemon.js";

fetchPokemon().then(async (response) => {
    const data = await response.json();
    const container = document.getElementById('container');
    // map => Tras darle una funcion, transforma los elementos en un listado.
    const entryElements = data.results.map(async (pokemon) => {
        const el = await createEntry(pokemon);
        return el;
    });
    await Promise.all(entryElements);
    container.innerHTML = '';
    entryElements.forEach(async (section) => {
        container.appendChild(await section)});
});



