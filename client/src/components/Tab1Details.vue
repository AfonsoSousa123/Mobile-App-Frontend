    
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
