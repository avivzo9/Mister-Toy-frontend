<template>
  <div id="app" class="app">
    <div class="nav-container container">
      <div class="nav sub-container">
        <h1>Mister Toy</h1>
        <div class="nav-content">
          <router-link class="link" to="/">Home</router-link> |
          <router-link class="link" to="/toy">Toys</router-link> |
          <router-link class="link" to="/edit">Add toy</router-link> |
          <router-link class="link" to="/about">About</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {},
  created() {
    this.$store.dispatch({ type: "loadToys" });
  },
};
</script>