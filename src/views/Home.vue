<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link :to="{ name: 'PokemonList'}">
      Get Started
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
