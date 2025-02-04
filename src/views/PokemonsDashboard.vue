<template>
  <div class="pokemonsdashboard">
    <div class="pokemonsdashboard__container">
      <template v-if="loading">
        <Loader />
      </template>
      <template v-else>
        <SearchFilter v-model="inputQuery" />
        <section class="pokemonsdashboard__container--list">
          <div v-if="!filteredList.length">
            <NotFound/>
          </div>
          <template v-else >
            <ul>
              <li v-for="(pokemon, index) in filteredList" :key="index">
                <PokemonItem
                  :pokemon="pokemon"
                  @change-favorite="pokemon.favorite = !pokemon.favorite"
                />
              </li>
            </ul>
          </template>
          
        </section>
      </template>
    </div>
    <footer class="pokemonsdashboard__footer">
      <ListButton
        @toggle-list="favoriteFilter = false"
        class-button="button-secondary"
        image="list" 
        alt-details="Switch All list"
        text="All"
      />
      <ListButton
        @toggle-list="favoriteFilter = true"
        class-button="button-primary"
        image="star-white"
        alt-details="Switch Favorite list"
        text="Favorites"
      />
    </footer>
  </div>
</template>
<script>
import api from "@/api";
import Loader from "@/components/Loader.vue";
import SearchFilter from "@/components/pokemons-dashboard/SearchFilter.vue";
import PokemonItem from "@/components/pokemons-dashboard/PokemonItem.vue";
import ListButton from "@/components/pokemons-dashboard/ListButton.vue";
import NotFound from "@/components/NotFound.vue";
export default {
  name: "PokemonsDashboard",
  components: {
    Loader,
    SearchFilter,
    PokemonItem,
    ListButton,
    NotFound
  },
  data() {
    return {
      loading: true,
      inputQuery: "",
      pokemons: [],
      favoriteFilter: false,
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
    filteredQuery(list) {
      return list.filter((list) => {
        return list.name.toLowerCase().includes(this.inputQuery.toLowerCase());
      });
    },
  },
  computed: {
    filteredList() {
      if (this.favoriteFilter) {
        const favorite = this.pokemons.filter((pokemon) => {
          return pokemon.favorite;
        });
        if (this.inputQuery) {
          return this.filteredQuery(favorite);
        }
        return favorite;
      }
      if (this.inputQuery) {
        return this.filteredQuery(this.pokemons);
      }
      return this.pokemons;
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
@media only screen and (max-width: 500px) {
  .pokemonsdashboard__container {
    padding: 35px 0;
  }
}
</style>
