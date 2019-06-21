<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Social Network</ion-title>

        <ion-button side="start" class="menu" color="dark" @click="openMenu">
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <div text-center>
        <div>
          <ion-avatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
          </ion-avatar>
        </div>

        <ion-text>{{username}}</ion-text>
        <br>
        <br>
        <ion-text>{{email}}</ion-text>
        <br>
        <br>
      </div>

      <ion-menu side="start" type="push" menuId="Menu" swipeGesture="true">
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
const API_URL = "http://localhost:3000/users/profile";
import axios from "axios";

export default {
  name: "Profile",
  data() {
    return {
      Menu: true,
      config: {
        withCredentials: true
      },
      username: "",
      email: ""
    };
  },
  methods: {
    openMenu() {
      this.Menu.open(true);
    },
    buildProfile(res) {
      this.username = res.data.username,
      this.email = res.data.email
    }
  },
  created() {
    axios.get(API_URL, this.config).then(Response => this.buildProfile(Response));
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
  float: left;
}
.mr-l {
  margin-left: 10px;
}
img{
  display: block;
  margin: 0 auto;
}
</style>