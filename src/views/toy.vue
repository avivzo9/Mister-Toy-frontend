<template>
  <div class="toy-container container">
      <h1>Our Toys!</h1>
      <toy-list />
    </div>
</template>

<script>
import toyList from "../components/toy-list.vue";

export default {
  name: "toy",
  components: {
    toyList,
  },
};
</script>
