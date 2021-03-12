<template>
  <div class="home-container container">
    <user-validation
      :loggedInUser="loggedInUser"
      @login="login"
      @signup="signup"
      @logout="logout"
    />
    <div class="sub-container" v-if="loggedInUser">
      <router-link
        v-if="loggedInUser.isAdmin"
        class="link"
        to="/admin"
        >Admin control</router-link
      >
    </div>
    <div class="home sub-container">
      <router-link class="link" to="/toy">Toys</router-link>
      <router-link class="link" to="/dashboard">Dashboard</router-link>
      <router-link class="link" to="/edit">Add toy</router-link>
      <router-link class="link" to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
import userValidation from "../components/user-validation";
import { Message } from "element-ui";

export default {
  name: "home",
  data() {
    return {
      loggedInUser: null,
    };
  },
  methods: {
    login(user) {
      this.$store
        .dispatch({ type: "login", user })
        .then((user) => {
          this.loggedInUser = user;
          Message.success(`Welcome back, ${user.fullname}.`);
        })
        .catch(() => {
          Message.error(`Cold'nt find username: "${user.username}". Please try again.`);
        });
    },
    signup(user) {
      this.$store.dispatch({ type: "signup", user }).then(() => {
        this.loggedInUser = user;
        Message.success(`Welcome, ${user.fullname}!`);
      })
      .catch(() => {
          Message.error(`This username is taken, try another name.`);
        });
    },
    logout() {
      this.$store.dispatch({ type: "logout" }).then(() => {
        this.loggedInUser = null;
        Message.success(`It's hurt to see you leaving!`);
      });
    },
  },
  components: {
    userValidation,
  },
};
</script>
