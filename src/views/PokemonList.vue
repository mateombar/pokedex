<template>
  <div class="pokemonlist">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.name">
          <p>Name: {{ pokemon.name }} Url: {{ pokemon.url }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../api";
export default {
  name: "PokemonList",
  props: {
    msg: String,
  },
  data() {
    return {
      pokemons: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.pokemons = [];
      try {
        const data = await api.pokemons.getPokemons();
        this.pokemons = [...data.results];
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {},
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0 10px;
}
a {
  color: #42b983;
  list-style: none;
  text-decoration: none;
}
</style>
