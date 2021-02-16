<template>
  <div class="pokemonsdashboard">
    <template v-if="loading">
      <Loader />
    </template>
    <template v-else>
      <SearchFilter />
      <section class="pokemons__list--container">
        <PokemonList />
      </section>
      <footer>
        <ListButtom />
        <ListButtom />
      </footer>
    </template>
  </div>
</template>
<script>
import Loader from "@/components/Loader.vue";
import SearchFilter from "@/components/pokemons-dashboard/SearchFilter.vue";
import PokemonList from "@/components/pokemons-dashboard/PokemonList.vue";
import ListButtom from "@/components/pokemons-dashboard/ListButtom.vue";
export default {
  name: "PokemonsDashboard",
  components: {
    Loader,
    SearchFilter,
    PokemonList,
    ListButtom,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
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
</style>
