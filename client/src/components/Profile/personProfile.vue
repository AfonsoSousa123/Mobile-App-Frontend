<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-button side="start" class="menu" color="dark" @click="openMenu">
          <ion-icon name="menu" color="light"></ion-icon>
        </ion-button>

        <ion-title>Social Network</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <div text-center>

        <div class="center">
          <img class="avatar" width="100" src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1">
        </div>
        <br>

        <ion-icon name="contact"></ion-icon>
        <ion-text>{{username}}</ion-text>
        <br>
        <br>
        
        <ion-icon name="mail"></ion-icon>
        <ion-text>{{email}}</ion-text>
        <br>
        <br>
        <ion-button color="success">
          <ion-icon name="heart" color="dark"></ion-icon>
          <ion-label class="mr-l" color="dark">Follow</ion-label>
        </ion-button>
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
  name: "personProfile",
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
      console.log(res);
    }
  },
  created() {
    //axios.get(API_URL, this.config).then(Response => console.log(Response));
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

  position: absolute;
  left: 1;
}
.mr-l {
  margin-left: 10px;
}
img{
  display: block;
  margin: 0 auto;
}
.center {
  text-align: center;
}
.avatar {
  border-radius: 50px;
}
ion-icon {
  font-size: 25px;
  margin-right: 10px;
}

</style>