<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: "latoregular";
  src: url("./assets/fonts/lato-regular-webfont.woff2") format("woff2"),
    url("./assets/fonts/lato-regular-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "montserratregular";
  src: url("./assets/fonts/Montserrat-regular-webfont.woff2") format("woff2"),
    url("./assets/fonts/Montserrat-regular-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
* {
  font-family: "latoregular";
  text-align: center;
  background-color: #E5E5E5;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  padding: 35px 30px;
}
.button-primary {
  padding: 11px 20px;
  background-color: #f22539;
  color: white;
  border-radius: 60px;
  text-decoration: none;
  font-weight: 700;
}
.button-secondary {
  padding: 11px 20px;
  background-color: #bfbfbf;
  color: white;
  border-radius: 60px;
  text-decoration: none;
  font-weight: 700;
}
</style>
