<template>
  <div class="toy-list-container container">
    <div class="toy-list sub-container">
      <toy-filter />
      <ul>
        <toy-preview
          @remove-toy="removeToy"
          v-for="toy in toys"
          :key="toy._id"
          :toy="toy"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import toyFilter from "./toy-filter.vue";
import toyPreview from "./toy-preview.vue";

export default {
  methods: {
    removeToy(id) {
      this.$store.dispatch({ type: "removeToy", id });
    },
  },
  computed: {
    toys() {
      return this.$store.state.toyStore.toys;
    },
  },
  components: {
    toyPreview,
    toyFilter,
  },
};
</script>