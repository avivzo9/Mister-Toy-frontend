<template>
  <div class="filter sub-container">
    <input type="search" class="search-toy" placeholder="Search" @keyup="sendFilter" v-model="filterBy.searchWord" />
      <select-filter @sorted="sendFilter" />
    <input id="stock" type="checkbox" @change="sendFilter" v-model="filterBy.stockFilter" />
    <label for="stock">In Stock</label>
  </div>
</template>

<script>
import selectFilter from "./select-filter.vue"

export default {
  data() {
    return {
      filterBy: {
        sortBy: "name",
        searchWord: null,
        stockFilter: false,
      },
    };
  },
  methods: {
    sendFilter(sort) {
      this.filterBy.sortBy = sort
      const filter = this.filterBy;
      this.$store.dispatch({ type: "setFilter", filter });
    },
  },
  components: {
    selectFilter,
  },
};
</script>

<style>
</style>