<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Social Network</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <ion-searchbar
        value
        animated
        color="dark"
        @ionInput="input = $event.target.value"
        v-on:input="show"
      ></ion-searchbar>

      <div>
        <ion-list v-for=" user in users" :key="user.userId">
          <ion-item>
            <ion-thumbnail>
              <ion-avatar>
                <img width="100" height="50" :src="user.userImg">
              </ion-avatar>
            </ion-thumbnail>
            <ion-label>{{user.userName}}</ion-label>
            <ion-label class="margin-label">Finn</ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail>
              <ion-avatar>
                <img width="100" height="50" src="https://ionicframework.com/docs/demos/api/list/avatar-finn.png" />
              </ion-avatar>
            </ion-thumbnail>
            <ion-label class="margin-label">Mega Man X</ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
const API_URL = "http://localhost:3000/users/find";
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      input: "",
      config: {
        withCredentials: true
      },
      users: []
    };
  },
  methods: {
    addPerson(res) {
      if (this.input.length == 0) {
        this.users = [];
      } else {
        var singlePerson = {};
        for (var i = 0; i < res.data.length; i++) {
          singlePerson = {
            userId: res.data[i].utilizador_id,
            userName: res.data[i].username,
            userImg:
              "https://ionicframework.com/docs/demos/api/list/avatar-finn.png"
          };
          for (var x = 0; x < this.users.length; x++) {
            if(this.users[x].userId == singlePerson.userId){
              var existe = true;
            }
          }
          if(!existe){
          this.users.push(singlePerson);
          }
        }
      }
    },
    show() {
      var data = {
        palavra: this.input
      };
      axios
        .post(API_URL, data, this.config)
        .then(Response => this.addPerson(Response));
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Rubik:500&display=swap");

* {
  font-family: "Rubik", sans-serif;
}
.margin-label {
  margin-left: 25px
}
</style>