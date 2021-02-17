<template>
  <article class="PokemonItem">
    <p>{{ pokemon.name }}</p>
    <div class="star__container" @click="$emit('change-favorite')">
      <img :src="favorite" alt="" />
    </div>
  </article>
</template>
<script>
import starGold from "@/assets/icons/star-gold.svg";
import starGray from "@/assets/icons/star-gray.svg";
export default {
  name: "PokemonItem",
  props: {
    pokemon: Object,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {
    favorite() {
      if (this.pokemon.favorite) {
        return starGold;
      }
      return starGray;
    },
  },
};
</script>
<style scoped>
.PokemonItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 315px;
  height: 60px;
  background-color: white;
  border-radius: 5px;
  padding: 17px 15px 17px 20px;
}
.PokemonItem p {
  max-width: 200px;
  text-align: left;
  color: 353535;
  background-color: white;
}
.PokemonItem p::first-letter {
  text-transform: uppercase;
}
.star__container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background-color: #f5f5f5;
  border-radius: 100px;
  cursor: pointer;
}
.star__container img {
  background-color: #f5f5f5;
  width: 26px;
}

@media only screen and (min-width: 750px) {
  .PokemonItem {
    width: 570px;
  }
  .PokemonItem p {
    max-width: 400px;
  }
}
</style>
