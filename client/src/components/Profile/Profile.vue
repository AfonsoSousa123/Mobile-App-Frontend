<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Social Network</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <div text-center>
        <ion-title>Profile</ion-title>
         <br>

        <ion-avatar>
          <img class="lol" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
        </ion-avatar>
        <br>

        <ion-title>Username</ion-title>
        <br>
        <ion-title>Email</ion-title>
      </div>
       

    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Rubik:500&display=swap");

* {
  font-family: "Rubik", sans-serif;
}
.lol {
  margin-left: 201%;
}
</style>