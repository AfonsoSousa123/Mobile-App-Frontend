    
<template>
  <ion-page
    class="ion-page">
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title>Social Network Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-item>
        <h1>Login</h1>
      </ion-item>

      <div>
        <ion-icon name="person"></ion-icon>
        <ion-input type="text" clearInput value="" placeholder="Email"></ion-input>

        <ion-icon name="lock"></ion-icon>
        <ion-input type="password" clearInput value="" placeholder="Password"></ion-input>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'tab2',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rubik:500&display=swap');

* {
  font-family: 'Rubik', sans-serif;
}
</style>
