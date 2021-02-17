const API_URL = 'https://pokeapi.co/api/v2';


async function callApi(endpoint){
    const url = API_URL + endpoint;
    const response = await fetch(url);
    const data = response.json();
    return data;
}

function favorites(data){
    data.results.map(result =>{
        result.favorite = false;
    })
    return data
}

const api = {
    pokemons: {
       async getPokemons(){
            const data = await callApi('/pokemon/');
            return favorites(data);
        },
        async getPokemonByName(pokeName){
            return callApi(`/pokemon/${pokeName}`);
        }

    }
}


export default api;