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
          <ion-item @click="getProfile(user.userId)" class="hover">
            <ion-thumbnail>
              <ion-avatar>
                <img width="100" height="50" :src="user.userImg">
              </ion-avatar>
            </ion-thumbnail>
            <ion-label>{{user.userName}}</ion-label>
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
    getProfile(id){
      this.$router.push({ name: 'personProfile', params: { id } })
    },
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
              "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
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
ion-label{
  margin-left: 2rem;
  font-weight: bold;
}

.hover{
  cursor: pointer;
}
</style>