<template>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <span class="close" @click="$emit('close-modal', false)"
          ><img :src="close" alt="close button"
        /></span>
      </div>
      <div class="modal_body">
        <div class="modal_body--image">
          <img :src="pokemon.sprites.front_default" alt="Pokemon Image" />
        </div>
        <div class="modal_body--text">
          <p><strong>Name:</strong> {{ pokemon.name }}</p>
          <hr />
          <p><strong>Weigth:</strong> {{ pokemon.weight }}</p>
          <hr />
          <p><strong>Heigth:</strong> {{ pokemon.height }}</p>
          <hr />
          <p><strong>Types:</strong> {{ pokemonTypes }}</p>
          <hr />
        </div>
      </div>
      <div class="modal-footer">
        <a type="button" class="button-primary">Share to my friends</a>
        <div class="star__container" @click="$emit('change-favorite')">
          <img :src="favorite" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/api";
import close from "@/assets/icons/close.svg";

import starGold from "@/assets/icons/star-gold.svg";
import starGray from "@/assets/icons/star-gray.svg";
export default {
  name: "DetailsModal",
  props: {
    pokemonProps: Object,
    isModal: Boolean,
  },
  data() {
    return {
      pokemon: {},
      close,
    };
  },
  mounted() {
    this.fetchData();

    const modal = document.getElementById("myModal");
    this.$el.addEventListener("click", (e) => {
      if (e.target == modal) {
        this.$emit("close-modal", false);
      }
    });
    window.addEventListener("keyup", (e) => {
      if (e.key == "Escape") {
        this.$emit("close-modal", false);
      }
    });
  },
  beforeDestroy() {
    this.pokemon = null;
  },
  methods: {
    async fetchData() {
      const data = await api.pokemons.getPokemonByName(this.pokemonProps.name);
      console.log(data);
      this.pokemon = data;
    },
  },
  computed: {
    pokemonTypes() {
      let types = [];
      this.pokemon.types.forEach((item) => {
        types.push(item.type.name);
      });
      console.log(types);
      return types;
    },
    favorite() {
      if (this.pokemonProps.favorite) {
        return starGold;
      }
      return starGray;
    },
  },
};
</script>
<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: 0px auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}

.modal-header {
  position: relative;
  width: 100%;
}
.close {
  position: absolute;
  right: 0;
  width: 26px;
  height: 26px;
  background: initial;
  margin: 10px;
}

.close:hover,
.close:focus {
  text-decoration: none;
  cursor: pointer;
}

.modal_body {
  background-color: none;
  width: 100%;
  background-color: white;
}
.modal_body--image {
  background-image: url(../../assets/landscape.svg);
  width: 100%;
  height: 190px;
  background-repeat: repeat-x;
}
.modal_body--image img {
  width: 180px;
  height: 180px;
  object-fit: contain;
  margin-top: 13px;
}

.modal_body--text {
  background-color: none;
  width: 100%;
  background-color: white;
  padding: 10px 30px 0 30px;
}
.modal_body--text p {
  font-size: 18px;
  line-height: 27px;
  color: #5e5e5e;
  text-align: left;
}
.modal_body--text strong {
  background-color: initial;
}
.modal_body--text hr {
  margin: 10px 0;
  height: 1px;
  border-width: 0;
  color: #e8e8e8;
}
p,
img {
  background-color: initial;
}

.modal-footer {
  padding: 20px 20px;
  background-color: white;
  color: white;
  display: flex;
  justify-content: space-between;
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

@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@media only screen and(min-width: 750px) {
  .modal-content {
    max-width: 40%;
  }
}
</style>
