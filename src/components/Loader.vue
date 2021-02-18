<template>
  <div class="Loader">
      <img src="../assets/icons/pokeball.svg" alt="pokeball loader" />
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
  height: 85vh;
}
.Loader img {
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
