<template>
  <div>
    <ion-tabs v-if="!logged">
      <ion-tab tab="/login">
        <ion-vue-router name="Login"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="/signup">
        <ion-vue-router name="SignUp"></ion-vue-router>
      </ion-tab>

      <ion-tab-bar slot="bottom" color="dark">
        <ion-tab-button tab="/login" default>
          <ion-icon name="contact"/>
          <ion-label>Login</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="/signup">
          <ion-icon name="contact"/>
          <ion-label>Sign Up</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>

    <ion-tabs v-if="logged">
      <ion-tab tab="/home">
        <ion-vue-router name="Home" default></ion-vue-router>
      </ion-tab>

      <ion-tab tab="/search">
        <ion-vue-router name="Search"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="/profile">
        <ion-vue-router name="profile"></ion-vue-router>
      </ion-tab>

      <ion-tab-bar slot="bottom" color="dark">
        <ion-tab-button tab="/home">
          <ion-icon name="Home"/>
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="/search">
          <ion-icon name="Search"/>
          <ion-label>Search</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="/profile">
          <ion-icon name="person"/>
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </div>
</template>

<script>
const API_URL = "http://localhost:3000/";
import axios  from "axios";

export default {
  name: "BottomMenu",
  data() {
    return {
      logged: true,
      config: {
        withCredentials: true
      }
    };
  },
  methods: {
    handleResponse(res) {
      if (res.data.logged == true) {
        this.logged = true;
      } else {
        this.logged = false;
      }
      this.$router.go(1);
    }
  },
  mounted() {
    axios.get(API_URL, this.config).then(Response => this.handleResponse(Response));
  }
};
</script>
