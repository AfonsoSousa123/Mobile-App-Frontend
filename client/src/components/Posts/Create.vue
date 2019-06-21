<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Social Network</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <div text-center>
        <h4>Create your post!</h4>
      </div>
      <div padding>
        <ion-item>
          <ion-label rows="13" position="top" px="24">Title:</ion-label>
          <ion-textarea></ion-textarea>
        </ion-item>

        <ion-item>
          <ion-label></ion-label>
          <ion-textarea rows="8" cols="8" placeholder="Say something..."></ion-textarea>
        </ion-item>
      </div>
      <div padding>
        <ion-button type="submit" color="dark" href expand="block" from="submitForm">POST</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
const API_URL = "http://localhost:3000/users/login";
import axios from "axios";

export default {
  name: "post"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Rubik:500&display=swap");

* {
  font-family: "Rubik", sans-serif;
}
.class {
  margin-left: 25px;
}
</style>