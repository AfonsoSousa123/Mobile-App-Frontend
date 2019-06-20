    
<template>
  <ion-page
    class="ion-page">
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title>Social Network Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-card>
        <ion-card-header>
          <ion-img src="https://cdn.discordapp.com/attachments/553763099061125131/591222475656790017/intel_meme.PNG"></ion-img>
          <ion-card-title>Post title</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Corrupti atque eos porro, eaque velit ab laudantium deserunt quam! 
        </ion-card-content>

        <ion-button color="secondary" class="button" @click="nextPage()">Read More</ion-button>
        <ion-button color="secondary" class="button" >
          <ion-icon name="thumbs-up"></ion-icon>
        </ion-button>
        <ion-button color="secondary" class="button" >
          <ion-icon name="thumbs-down"></ion-icon>
        </ion-button>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name:"tab1",
  methods: {
    nextPage() {
      this.$router.push("/tab1/details");
    }
  },
  onCreate() {
    debugger;
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rubik:500&display=swap');

* {
  font-family: 'Rubik', sans-serif;
}
.button {
  font-size: 12px;
}
</style>
