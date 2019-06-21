<template>
  <div>
    <ion-tabs v-if="!logged">
      <ion-tab tab="/login">
        <ion-vue-router name="Login"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="/signup">
        <ion-vue-router name="SignUp"></ion-vue-router>
      </ion-tab>

      <ion-tab-bar slot="bottom">
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
        <ion-vue-router name="profile"></ion-vue-router>
      </ion-tab>

      <ion-tab-bar slot="bottom">
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
      </ion-tab-bar>
    </ion-tabs>
  </div>
</template>

<script>
export default {
  name: "BottomMenu",
  data() {
    return {
      logged: true
    };
  }
};
</script>
