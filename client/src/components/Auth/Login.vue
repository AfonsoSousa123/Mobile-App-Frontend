    
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
      <form v-on:submit.prevent="login" id="submitFrom">
        <div padding>
          <ion-item>
            <ion-input type="text" name="email" placeholder="Email">
              <ion-icon name="person"></ion-icon>
            </ion-input>
          </ion-item>

          <ion-item>
            <ion-input type="password" name="password" placeholder="Password">
              <ion-icon name="lock"></ion-icon>
            </ion-input>
          </ion-item>
        </div>

        <div padding>
          <ion-button
            type="submit"
            size="large"
            color="dark"
            href
            expand="block"
            from="submitForm"
          >Login</ion-button>
        </div>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
const API_URL = "http://localhost:3000/users/login";
import axios from 'axios';

export default {
  name: "Login",
  data() {
    return {
      config: {
        withCredentials: true
      }
    };
  },
  methods: {
    validateLogin(res){
      if(res.data.logged == true){
        this.$router.go('/default');
      }else{
        console.log("Failed login!");
      }
    },
    login(e) {
      e.preventDefault();
      var email = e.target.elements.email.value;
      var password = e.target.elements.password.value;
      var data = {
        email: email,
        password: password
      }
      axios
        .post(API_URL, data, this.config)
        .then(Response => this.validateLogin(Response));
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