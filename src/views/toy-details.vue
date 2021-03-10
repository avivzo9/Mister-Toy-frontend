<template>
  <section class="toy-details-container container" v-if="currToy">
    <div class="toy-details sub-container">
      <div class="flex">
        <div class="for-details flex">
          <h1>Name:</h1>
          <h3>Type:</h3>
          <p>Price:</p>
        </div>
        <div class="details flex">
          <h1>{{ currToy.name }}</h1>
          <h3>{{ currToy.type }}</h3>
          <p>{{ currToy.price }}</p>
        </div>
      </div>
        <div class="flex">
          <p :style="{ color: stockColor }">{{ stockDisplay }}!</p>
          <router-link class="link" to="/toy">Back</router-link>
        </div>
    </div>
  </section>
</template>

<script>
import { toyService } from "../services/toy.service.js";

export default {
  name: "edit-details",
  data() {
    return {
      currToy: null,
    };
  },
  methods: {},
  created() {
    const id = this.$route.params.toyId;
    toyService.getToyById(id).then((toy) => (this.currToy = toy));
  },
  computed: {
    stockDisplay() {
      return this.currToy.inStock ? "In stock!" : "Not in stock";
    },
    stockColor() {
      return this.currToy.inStock ? "green" : "red";
    },
  },
};
</script>