export async function createEntry(pokemon) {
    const containerElement = document.createElement("section");
    // stringify => Transforma los objetos en caracteres 
    const data = await (await fetch(pokemon.url)).json();

    const headlineElement = document.createElement('h2');
    headlineElement.innerHTML = pokemon.name;

    const imgElement = document.createElement('img');
    imgElement.src = data.sprites.front_default

    containerElement.appendChild(headlineElement);
    containerElement.appendChild(imgElement);

    return containerElement;
}