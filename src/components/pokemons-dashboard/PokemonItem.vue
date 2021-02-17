<template>
  <div>
    <article class="PokemonItem">
      <div class="PokemonItem__text-container"  @click="showModal">
        <p>{{ pokemon.name }}</p>
      </div>
      <div class="star__container" @click="$emit('change-favorite')">
        <img :src="favorite" alt="" />
      </div>
    </article>
    <DetailsModal v-if="isModal" 
      :pokemonProps="pokemon"
      :is-modal="isModal"
      @close-modal="closeModal"
      @change-favorite="$emit('change-favorite')"
    />
  </div>
</template>
<script>
import starGold from "@/assets/icons/star-gold.svg";
import starGray from "@/assets/icons/star-gray.svg";
import DetailsModal from "@/components/pokemons-dashboard/DetailsModal.vue";
export default {
  name: "PokemonItem",
  components: {
    DetailsModal,
  },
  props: {
    pokemon: Object,
  },
  data() {
    return {
      isModal: false,
    };
  },
  mounted() {},
  methods: {
    showModal() {
      this.isModal = true;
    },
    closeModal(action) {
      this.isModal = action;
    },
  },
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
}
.PokemonItem .PokemonItem__text-container {
  cursor: pointer;
  padding: 17px 15px 17px 20px;
  width: 90%;
  background-color: initial;
}
.PokemonItem p {
  text-align: left;
  color: 353535;
  background-color: initial;
}
.PokemonItem p::first-letter {
  text-transform: uppercase;
}
.star__container {
  margin-right: 15px;
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
  .PokemonItem .PokemonItem__text-container {
    max-width: 100%;
  }
}
</style>
