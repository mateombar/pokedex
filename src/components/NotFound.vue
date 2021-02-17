<template>
  <div class="notfound">
    <h1>Uh-oh!</h1>
    <h5>You look lost on your journey!</h5>
    <div class="back-home">
      <router-link :to="{ name: 'Home' }" type="button" class="button-primary">
        Go back home
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotFound",
};
</script>
<style scoped>
.notfound h1 {
  color: #353535;
  font-size: 36px;
  font-weight: 700;
  line-height: 43.2px;
  margin-top: 50px;
}
.notfound h5 {
  font-weight: 500;
  margin-top: 10px;
  font-size: 20px;
  line-height: 30px;
  margin-top: 10px;
  color: #5e5e5e;
}
.notfound .back-home {
  margin-top: 25px;
}
</style>
