<template>
  <div class="pokemonsdashboard">
    <div class="pokemonsdashboard__container">
      <template v-if="loading">
        <Loader />
      </template>
      <template v-else>
        <SearchFilter />
        <section class="pokemonsdashboard__container--list">
          <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.name">
              <PokemonItem :pokemon="pokemon" />
            </li>
          </ul>
        </section>
      </template>
    </div>
    <footer class="pokemonsdashboard__footer">
      <ListButton class-button="button-primary" image="list" text="All"/>
      <ListButton class-button="button-secondary" image="star-white" text="Favorites"/>
    </footer>
  </div>
</template>
<script>
import api from "@/api";
import Loader from "@/components/Loader.vue";
import SearchFilter from "@/components/pokemons-dashboard/SearchFilter.vue";
import PokemonItem from "@/components/pokemons-dashboard/PokemonItem.vue";
import ListButton from "@/components/pokemons-dashboard/ListButton.vue";
export default {
  name: "PokemonsDashboard",
  components: {
    Loader,
    SearchFilter,
    PokemonItem,
    ListButton,
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

.pokemonsdashboard__container {
  padding: 35px 30px 0px 30px;
  overflow: auto;
  margin-bottom: 80px;
}
.pokemonsdashboard__container--list {
  margin: 20px;
}
.pokemonsdashboard__container--list li {
  list-style: none;
  margin: 10px 0;
}

.pokemonsdashboard__footer {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
}
@media only screen and (max-width: 500px){
  .pokemonsdashboard__container {
  padding: 35px 0;
}
}
</style>
