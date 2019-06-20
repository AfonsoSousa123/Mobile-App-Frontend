<template>
  <div id="app">
    <ion-app>
      <ion-vue-router :animated="false"></ion-vue-router>
    </ion-app>
  </div>
</template>


<script>
import HelloWorld from "./components/HelloWorld.vue";


export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
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
