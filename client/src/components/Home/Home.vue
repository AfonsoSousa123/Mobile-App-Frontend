<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Social Network</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>

      <ion-card>
        <ion-card-header>
          <ion-img src="https://cdn.discordapp.com/attachments/553763099061125131/591222475656790017/intel_meme.PNG"></ion-img>
          <ion-card-title>Post Title</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi facere cumque eaque nemo minus itaque 
          sed voluptatibus accusantium facilis omnis esse magni mollitia fuga, laborum dolore aperiam quaerat molestiae cupiditate?
        </ion-card-content>

        <ion-button color="white">
          <ion-icon name="thumbs-up" color="dark"></ion-icon>
        </ion-button>
        <ion-button color="white">
          <ion-icon name="thumbs-down" color="dark"></ion-icon>
        </ion-button>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Rubik:500&display=swap");

* {
  font-family: "Rubik", sans-serif;
}
</style>