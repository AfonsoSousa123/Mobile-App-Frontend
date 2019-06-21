    
<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Social Network</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <div text-center>
        <h4>Login</h4>
      </div>
      <div padding>
        <ion-item>
          <ion-input type="text" placeholder="Email">
            <ion-icon name="person"></ion-icon>
          </ion-input>
        </ion-item>

        <ion-item>
          <ion-input type="password" placeholder="Password">
            <ion-icon name="lock"></ion-icon>
          </ion-input>
        </ion-item>
      </div>

      <div padding>
        <ion-button size="large" color="dark" href expand="block">Login</ion-button>
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
ion-button {
  font-weight: 300;
}
ion-icon {
  margin-right: 10px;
  font-size: 20px;
}
</style>