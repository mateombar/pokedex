<template>
  <a type="button" :class="classButton">
    <img :src="getImage" alt="" />
    {{ text }}
  </a>
</template>
<script>
import starWhite from "@/assets/icons/star-white.svg";
import list from "@/assets/icons/list.svg";
export default {
  name: "ListButtom",
  props: {
    classButton: String,
    image: String,
    text: String,
  },
  data() {
    return {};
  },
  computed: {
    getImage() {
      if (this.image == "list") {
        return list;
      }
      return starWhite;
    },
  },
};
</script>
<style scoped>
a {
  margin: 7px;
  font-size: 18px;
  line-height: 21.6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
a img{
  background-color: initial;
  width: 22px;
  margin-right: 10px;
}
@media screen and (min-width: 750px) {
  a {
    width: 275px;
  }
}
</style>
