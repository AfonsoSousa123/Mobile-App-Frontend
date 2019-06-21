<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Social Network</ion-title>

        <ion-button side="start" class="menu" color="dark">
          <ion-icon name="menu" color="light" @click="openMenu"></ion-icon>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <div text-center>
        <ion-thumbnail>
          <ion-avatar>
            <img width="200" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
          </ion-avatar>
        </ion-thumbnail>
      
        <ion-text>Username</ion-text>
        <br>
        <br>
        <ion-text>Email</ion-text>
      </div>

      <ion-menu side="start" type="push" menuId="menu" swipeGesture="true">
          <ion-header>
            <ion-toolbar color="danger">
              <ion-title>End Menu</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list>
              <ion-item>Menu Item</ion-item>
              <ion-item>Menu Item</ion-item>
              <ion-item>Menu Item</ion-item>
              <ion-item>Menu Item</ion-item>
              <ion-item>Menu Item</ion-item>
            </ion-list>
          </ion-content>
        </ion-menu>
    </ion-content>
  </ion-page>
</template>

<script>

export default {
  name: "Profile",
  data() {
    return {
      menu: true,
    };
  },
  methods: {
    openMenu() {
      this.menu.open(true)
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Rubik:500&display=swap");

* {
  font-family: "Rubik", sans-serif;
}
ion-text {
  margin-bottom: 20px;
}
.menu {
  float:left;
}
</style>