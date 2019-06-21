<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Social Network</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <div text-center>Profile page</div>
        <ion-avatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
        </ion-avatar>
        <ion-title>Username</ion-title>
        <ion-title>Email</ion-title>

    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Rubik:500&display=swap");

* {
  font-family: "Rubik", sans-serif;
}
</style>