<template>
  <div class="home">
    <template v-if="loading">
      <Loader />
    </template>
    <template v-else>
      <div class="image_container">
        <img alt="Pikachu Logo" src="../assets/pikachu.svg" />
      </div>
      <div class="text_container">
        <h3>Welcome to Pokédex</h3>
        <p>
          The digital encyclopledia created by Proffesor Oak is an invaluable
          tool to Trainers in the Pókemon world.
        </p>
      </div>
      <router-link
        class="button-primary"
        :to="{ name: 'PokemonsDashboard' }"
      >
        Get Started
      </router-link>
    </template>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
export default {
  name: "Home",
  components: {
    Loader,
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
.home {
  padding: 35px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.image_container {
  width: 325px;
  height: 288px;
}
.text_container {
  margin: 50px 0px;
}
.text_container h3 {
  margin-bottom: 50px;
  font-weight: 700px;
  color: #353535;
}
.text_container p {
  color: #5e5e5e;
}

@media screen and (max-width: 600px) {
  .text_container {
    width: 90%;
  }
}
</style>
