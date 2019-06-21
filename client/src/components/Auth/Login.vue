    
<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title>Login Tab</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-item>
        <h2>Login From</h2>
      </ion-item>

      <div>
        <ion-input type="text" value placeholder="Email">
          <ion-icon name="person"></ion-icon>
        </ion-input>

        <ion-input type="password" value placeholder="Password">
          <ion-icon name="lock"></ion-icon>
        </ion-input>
        <ion-button expand="full">Login</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Rubik:500&display=swap");
* {
  font-family: "Rubik", sans-serif;
}
</style>