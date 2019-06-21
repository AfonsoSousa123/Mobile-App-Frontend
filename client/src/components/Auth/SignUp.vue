    
<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Social Network</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <div text-center>
        <h4>Sign Up</h4>
      </div>
      <form v-on:submit.prevent="SignUp" id="submitForm">
        <div padding>
          <ion-item>
            <ion-input type="text" name="username" placeholder="Username">
              <ion-icon name="person"></ion-icon>
            </ion-input>
          </ion-item>

          <ion-item>
            <ion-input type="text" name="email" placeholder="Email">
              <ion-icon name="mail"></ion-icon>
            </ion-input>
          </ion-item>

          <ion-item>
            <ion-input type="password" name="password" placeholder="Password">
              <ion-icon name="lock"></ion-icon>
            </ion-input>
          </ion-item>

          <ion-item>
            <ion-input type="password" name="repeatedPassword" placeholder="Repeat Password">
              <ion-icon name="lock"></ion-icon>
            </ion-input>
          </ion-item>
        </div>

        <div padding>
          <ion-button
            size="large"
            type="submit"
            color="dark"
            href
            expand="block"
            form="submitForm"
          >Sign Up</ion-button>
        </div>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
const API_URL = "http://localhost:3000/users/signup";
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      config: {
        withCredentials: true
      }
    };
  },
  methods: {
    responseSignup(res) {
      if(res.data.isRegisted == false){
        console.log("Failed login");
      }else{
        this.$route.go('/login');
      }
    },
    SignUp(e) {
      e.preventDefault();
      var username = e.target.elements.username.value;
      var email = e.target.elements.email.value;
      var password = e.target.elements.password.value;
      var repeatedPassword = e.target.elements.password.value;
      var data = {
        username: username,
        email: email,
        password: password
      };
      axios
        .post(API_URL, data, this.config)
        .then(Response => this.responseSignup(Response));
    }
  }
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
