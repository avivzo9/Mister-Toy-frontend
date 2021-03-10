<template>
  <div class="home-container container">
    <div class="home sub-container">
      <router-link class="link" to="/toy">Toys</router-link>
      <router-link class="link" to="/dashboard">Dashboard</router-link>
      <router-link class="link" to="/edit">Add toy</router-link>
      <router-link class="link" to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>
