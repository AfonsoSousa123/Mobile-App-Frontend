<template>
  <ion-page class="ion-page">
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Social Network</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <div text-center>

        <div class="center">
          <img class="avatar" width="100" src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1">
        </div>
        <br>

        <ion-icon name="contact"></ion-icon>
        <ion-text>{{username}}</ion-text>
        <br>
        <br>
        
        <ion-icon name="mail"></ion-icon>
        <ion-text>{{email}}</ion-text>
        <br>
        <br>
        <ion-button v-if="follow == false" color="success" v-on:click="startFollow">
          <ion-icon name="heart" color="dark"></ion-icon>
          <ion-label class="mr-l" color="dark">Follow</ion-label>
        </ion-button>

        <ion-button v-if="follow == true" color="danger" v-on:click="unfollowUser">
          <ion-icon name="heart" color="dark"></ion-icon>
          <ion-label class="mr-l" color="dark">Unfollow</ion-label>
        </ion-button>

        <ion-button v-if="follow == 'self'" color="danger" disabled>
          <ion-icon name="heart" color="dark"></ion-icon>
          <ion-label class="mr-l" color="dark">Unfollow</ion-label>
        </ion-button>

      </div>
    </ion-content>
  </ion-page>
</template>

<script>
const API_URL = "http://localhost:3000/users/person/profile";
const API_CHECK_FOLLOW = "http://localhost:3000/relations/check/follow";
const API_START_FOLLOW = "http://localhost:3000/relations/follow";
const API_STOP_FOLLOW = "http://localhost:3000/relations/unfollow";

import axios from "axios";

export default {
  name: "personProfile",
  data() {
    return {
      config: {
        withCredentials: true
      },
      username: "",
      email: "",
      follow: false,
      relation_id: ""
    };
  },
  methods: {
    startFollow(){
      var id = this.$route.params.id;
      axios.post(API_START_FOLLOW,{id},this.config).then(Response => this.checkFollow());
    },
    unfollowUser(){
      var id = this.$route.params.id;
      axios.post(API_STOP_FOLLOW,{id},this.config).then(Response => this.checkFollow());
    },
    buildProfile(res) {
      this.username = res.data.username;
      this.email = res.data.email;
    },
    buildFollow(res){
      this.follow = res.data.follow;
      this.relation_id = res.data.relationID;
    },
    checkFollow(){
      var id = this.$route.params.id;
      axios.post(API_CHECK_FOLLOW,{id},this.config).then(Response => this.buildFollow(Response));
      this.$router.go(1);
    }
  },
  created() {
    var id = this.$route.params.id;
    axios.post(API_URL,{id},this.config).then(Response => this.buildProfile(Response));
    this.checkFollow();
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Rubik:500&display=swap");

* {
  font-family: "Rubik", sans-serif;
}
ion-text {
  margin-bottom: 20px;
}
.menu {

  position: absolute;
  left: 1;
}
.mr-l {
  margin-left: 10px;
}
img{
  display: block;
  margin: 0 auto;
}
.center {
  text-align: center;
}
.avatar {
  border-radius: 50px;
}
ion-icon {
  font-size: 25px;
  margin-right: 10px;
}

</style>