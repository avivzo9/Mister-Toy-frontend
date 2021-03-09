<template>
  <div class="home-container container" @click="goToToys">
    <div class="home sub-container"></div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    goToToys() {
      this.$router.push('/toy')
    }
  }
};
</script>
