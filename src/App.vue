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
  color: #2c3e50;
}

</style>
