const API_URL = 'https://pokeapi.co/api/v2';


async function callApi(endpoint){
    const url = API_URL + endpoint;
    const response = await fetch(url);
    const data = response.json();
    return data;
}

const api = {
    pokemons: {
        getPokemons(){
            return callApi('/pokemon/');
        },
        async getPokemonByName(pokeName){
            return callApi(`/pokemon/${pokeName}`);
        }

    }
}


export default api;