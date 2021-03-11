<template>
  <div id="app" class="app main-layout">
    <div class="nav-container container">
      <div class="nav sub-container">
        <h1>Mister Toy</h1>
        <span class="menu">☰</span>
        <div class="nav-content">
          <router-link class="link" to="/">Home</router-link> |
          <router-link class="link" to="/toy">Toys</router-link> |
          <router-link class="link" to="/edit">Add toy</router-link> |
          <router-link class="link" to="/dashboard">Dashboard</router-link> |
          <router-link class="link" to="/about">About</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import userMsg from './components/user-msg'
export default {
  name: "app",
  methods: {},
  components: {
    userMsg
  },
  created() {
    this.$store.dispatch({ type: "loadToys" });
    this.$store.dispatch({ type: "loadUsers" });
  },
};
</script>