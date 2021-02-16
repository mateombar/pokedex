<template>
  <div class="pokemonsdashboard">
    <template v-if="loading">
      <Loader />
    </template>
    <template v-else>
      <SearchFilter />
      <section class="pokemons__list--container">
        <ul>
          <li v-for="pokemon in pokemons" :key="pokemon.name">
            <PokemonItem :pokemon="pokemon" />
          </li>
        </ul>
      </section>
      <footer>
        <ListButtom />
        <ListButtom />
      </footer>
    </template>
  </div>
</template>
<script>
import api from "@/api";
import Loader from "@/components/Loader.vue";
import SearchFilter from "@/components/pokemons-dashboard/SearchFilter.vue";
import PokemonItem from "@/components/pokemons-dashboard/PokemonItem.vue";
import ListButtom from "@/components/pokemons-dashboard/ListButtom.vue";
export default {
  name: "PokemonsDashboard",
  components: {
    Loader,
    SearchFilter,
    PokemonItem,
    ListButtom,
  },
  data() {
    return {
      loading: true,
      inputQuery: "",
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
        this.loading = false;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
.pokemonsdashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.pokemons__list--container {
  margin: 20px
}
.pokemons__list--container li{
  list-style: none;
  margin: 10px 0;
}
</style>
