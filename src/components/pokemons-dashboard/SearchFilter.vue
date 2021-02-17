<template>
  <div class="SearchFilter">
    <input type="text" placeholder="Search" :value="searchQuery"
      @input="$emit('input', $event.target.value)"/>
  </div>
</template>
<script>
export default {
  name: "SearchFilter",
  props: {
    searchQuery: String,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style scoped>
.SearchFilter input {
  background: url(../../assets/icons/lens.svg) no-repeat scroll 12px 15px;
  padding: 10px 20px 10px 40px;
  height: 50px;
  width: 315px;
  background-color: #fff;
  color: #353535;
  border-radius: 5px;
  border: none;
  text-align: left;
  font-family: montserratregular;
  font-size: 1rem;
  /* outline: none; */
}
@media only screen and (min-width: 750px) {
  .SearchFilter input{
    width: 570px;
  }
}
</style>
