    
<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title>Sign Up Tab</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-item>
        <h2>Sign Up</h2>
      </ion-item>

      <div>
        <ion-input type="text" clearInput value placeholder="Username">
          <ion-icon name="person"></ion-icon>
        </ion-input>
        <ion-input type="text" clearInput value placeholder="Email">
          <ion-icon name="mail"></ion-icon>
        </ion-input>
        <ion-input type="password" clearInput value placeholder="Password">
          <ion-icon name="lock"></ion-icon>
        </ion-input>
        <ion-input type="password" clearInput value placeholder="Repeat Password">
          <ion-icon name="lock"></ion-icon>
        </ion-input>
        <ion-button expand="full">Sign Up</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "SignUp"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Rubik:500&display=swap");

* {
  font-family: "Rubik", sans-serif;
}
</style>
