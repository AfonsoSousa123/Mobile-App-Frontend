<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Social Network</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-searchbar value animated color="dark"></ion-searchbar>

      <div>
        <ion-list>
          <ion-item>
            <ion-thumbnail>
              <ion-avatar>
                <img width="100" height="50" src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png" />
              </ion-avatar>
            </ion-thumbnail>
            <ion-label>Finn</ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail>
              <ion-avatar>
                <img width="100" height="50" src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png" />
              </ion-avatar>
            </ion-thumbnail>
            <ion-label>Mega Man X</ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "Search"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Rubik:500&display=swap");

* {
  font-family: "Rubik", sans-serif;
}
ion-label {
  margin-left: 25px;
}
</style>