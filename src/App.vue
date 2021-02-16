<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@font-face {
    font-family: 'latoregular';
    src: url('./assets/fonts/lato-regular-webfont.woff2') format('woff2'),
         url('./assets/fonts/lato-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
#app {
  font-family: 'latoregular';
  text-align: center;
}
.button-primary{
  padding: 11px 20px;
  background-color: #F22539;
  color: white;
  border-radius: 60px;
  text-decoration: none;
  font-weight: 700;
}
.button-secondary{
  padding: 11px 20px;
  background-color: #BFBFBF;
  color: white;
  border-radius: 60px;
  text-decoration: none;
  font-weight: 700;
}

</style>
