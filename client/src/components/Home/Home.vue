<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Social Network</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>

      <ion-card color="Light-shade">
        <ion-img src="https://cdn.discordapp.com/attachments/553763099061125131/591222475656790017/intel_meme.PNG"></ion-img>

        <ion-card-header>
          <ion-card-title>Post Title</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi facere cumque eaque nemo minus itaque 
          sed voluptatibus accusantium facilis omnis esse magni mollitia fuga, laborum dolore aperiam quaerat molestiae cupiditate?
        </ion-card-content>

        <ion-button color="white">
          <ion-icon name="thumbs-up" color="dark"></ion-icon>
          <p>30</p>
        </ion-button>
        <ion-button color="white">
          <ion-icon name="thumbs-down" color="dark"></ion-icon>
          <p>2</p>
        </ion-button>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script>
const API_URL = "http://localhost:3000/users/find";
import axios from "axios";

export default {
  name: "Home"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Rubik:500&display=swap");

* {
  font-family: "Rubik", sans-serif;
}
p {
  color: black;
}
ion-icon {
  margin-left: 10px;
}
</style>