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
        <ion-tab-button tab="/login">
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
        <ion-vue-router name="Home"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="/search">
        <ion-vue-router name="Search"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="/profile">
        <ion-vue-router name="Profile"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="/create/post">
        <ion-vue-router name="createPost"></ion-vue-router>
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

        <ion-tab-button tab="/create/post">
          <ion-icon name="add-circle-outline"/>
          <ion-label>Create</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </div>
</template>

<script>
const API_URL = "http://localhost:3000/";
import axios from "axios";

export default {
  name: "BottomMenu",
  data() {
    return {
      logged: null,
      config: {
        withCredentials: true
      }
    };
  },
  methods: {
    redirect() {
      if (this.logged == true) {
        this.$router.go(1);
      }
    },
    handleResponse(res) {
      if (res.data.logged == true) {
        this.logged = true;
      } else {
        this.logged = false;
      }
      this.redirect();
    }
  },
  mounted() {
    var config = {
      withCredentials: true
    };
    axios.get(API_URL, config).then(Response => this.handleResponse(Response));
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Rubik:500&display=swap");

* {
  font-family: "Rubik", sans-serif;
}

ion-label {
  margin-left: 0.5rem;
}
ion-icon {
  margin-left: 0.5rem;
}
</style>

