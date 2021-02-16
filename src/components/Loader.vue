<template>
  <div class="Loader">
    <img
      class="Loader__image"
      src="../assets/icons/pokeball.svg"
      alt="poke loader"
    />
  </div>
</template>
<script>
export default {
  name: "Loader",
};
</script>
<style scoped>
.Loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.Loader__image {
  animation: Loader__image 1s linear infinite;
}
@keyframes Loader__image {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
