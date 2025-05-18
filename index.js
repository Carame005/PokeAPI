//Version web

const nombrePokemon = document.getElementById("pokeInput");
const pokeBoton = document.getElementById("pokeBoton");
const pokeLista = document.getElementById("listaPokemon");

pokeBoton.addEventListener("click", (e) => {
    e.preventDefault();

    if (nombrePokemon.value === "") {
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon.value.toLowerCase()}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon no encontrado');
            }
            return response.json();
        })
        .then(data => {
            // Limpiar lista antes de añadir nuevo resultado
            pokeLista.innerHTML = "";

            // Crear elementos
            const liNombre = document.createElement('li');
            liNombre.innerText = `Nombre: ${data.name}`;

            const liAltura = document.createElement('li');
            liAltura.innerText = `Altura: ${data.height}`;

            const liPeso = document.createElement('li');
            liPeso.innerText = `Peso: ${data.weight}`;

            const liTipos = document.createElement('li');
            liTipos.innerText = `Tipos: ${data.types.map(t => t.type.name).join(", ")}`;

            const liImagen = document.createElement('li');
            const img = document.createElement('img');
            img.src = data.sprites.front_default;
            img.alt = data.name;
            liImagen.appendChild(img);

            // Añadir al DOM
            pokeLista.appendChild(liNombre);
            pokeLista.appendChild(liAltura);
            pokeLista.appendChild(liPeso);
            pokeLista.appendChild(liTipos);
            pokeLista.appendChild(liImagen);
        })
        .catch(error => {
            console.error('Error al obtener el Pokémon:', error.message);
            pokeLista.innerHTML = `<li>${error.message}</li>`;
        });
});

