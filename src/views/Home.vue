<template>
  <div class="home-container container">
    <div class="login sub-container">
      <button @click="toLogin" v-if="!isLogin && !isSignup">Login</button>
      <button @click="toSignup" v-if="!isLogin && !isSignup">Signup</button>
      <div class="inputs-container flex">
        <div class="flex" v-if="isSignup">
          <form @submit.prevent="signup">
            <input type="text" v-model="user.fullname" placeholder="full name" />
            <input type="text" v-model="user.username" placeholder="username" />
            <input type="password" v-model="user.password" placeholder="password" />
            <button>Signup</button>
          </form>
        </div>
        <div class="flex" v-if="isLogin">
          <form @submit.prevent="login">
            <input type="text" v-model="user.username" placeholder="user name" />
            <input type="password" v-model="user.password" placeholder="password" />
            <button>Login</button>
          </form>
        </div>
        <button @click="closeAll" v-if="isLogin || isSignup">Back</button>
      </div>
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
import { userService } from "../services/user.service.js";

export default {
  name: "home",
  data() {
    return {
      isLogin: false,
      isSignup: false,
      user: userService.getEmptyUser()
    };
  },
  methods: {
    login() {
      const user = this.user
      this.$store.dispatch({type: 'login', user})
    },
    signup() {

    },
    toLogin() {
      this.isLogin = true;
      this.isSignup = false;
    },
    toSignup() {
      this.isSignup = true;
      this.isLogin = false;
    },
    closeAll() {
      this.isSignup = false;
      this.isLogin = false;
    }
  },
};
</script>
