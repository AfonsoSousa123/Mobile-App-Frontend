<template>
  <div id="app">
    <ion-app>
      <ion-vue-router :animated="false"></ion-vue-router>
    </ion-app>
  </div>
</template>


<script>
export default {
  name: "app"
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Rubik:500&display=swap');

#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
