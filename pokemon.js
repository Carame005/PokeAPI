//Version JavaScript en consola

const nombrePokemon = 'pikachu';

async function obtenerDatosPokemon(nombre) {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);

        if (!respuesta.ok) {
            throw new Error('Pokémon no encontrado');
        }

        const data = await respuesta.json();

        // 3. Mostramos los datos relevantes
        console.log('Nombre:', data.name);
        console.log('Altura:', data.height); // en decímetros
        console.log('Peso:', data.weight);   // en hectogramos

        // 4. Extraemos y mostramos los tipos
        const tipos = data.types.map(tipoInfo => tipoInfo.type.name);
        console.log('Tipos:', tipos.join(', '));

    } catch (error) {
        console.error('Error al obtener el Pokémon:', error.message);
    }
}

// Llamamos a la función con el nombre del Pokémon
obtenerDatosPokemon(nombrePokemon);
