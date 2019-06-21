<template>
  <div>
    <ion-tabs>
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
  </div>
</template>

<script>
export default {
    name: 'BottomMenu'
}
</script>
