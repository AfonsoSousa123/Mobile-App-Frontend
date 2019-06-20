    
<template>
  <ion-page
    class="ion-page">
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-title>Social Network Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-label>Home</ion-label>
      <br>

      <ion-card>
        <ion-card-header>
          <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg" alt="">
          <ion-card-title>Post title</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti atque eos porro, eaque velit ab laudantium deserunt quam! 
          Recusandae aperiam voluptatem, aliquid praesentium dicta dolorum sunt eligendi omnis eveniet tenetur.
        </ion-card-content>
      </ion-card>

      <ion-button @click="nextPage()">Next Page</ion-button>
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
</style>
