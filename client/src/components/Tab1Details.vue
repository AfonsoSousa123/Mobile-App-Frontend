    
<template>
  <ion-page
    class="ion-page">
    <ion-header>
      <ion-toolbar color="secondary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Social Network Tab 1 Details</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-label>This is the post details page</ion-label>

      <ion-card>
        <ion-card-header>
          <ion-img src="https://cdn.discordapp.com/attachments/553763099061125131/591222475656790017/intel_meme.PNG"></ion-img>
          <ion-card-title>Post title</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti atque eos porro, eaque velit ab laudantium deserunt quam! 
          Recusandae aperiam voluptatem, aliquid praesentium dicta dolorum sunt eligendi omnis eveniet tenetur.
        </ion-card-content>

      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "tab1",
  methods: {
    nextPage() {
      this.$router.push("/geo-location-page");
    }
  },
  onCreate() {
    debugger;
  }
};
</script>

<style>
</style>
