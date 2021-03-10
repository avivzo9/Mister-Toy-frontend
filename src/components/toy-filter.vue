<template>
  <div class="filter sub-container">
    <div class="flex">
      <input
        type="search"
        class="search-toy"
        placeholder="Search"
        @keyup="sendFilter"
        v-model="filterBy.searchWord"
      />
      <select-filter @sorted="sendFilter" />
    </div>
    <div>
      <input
        id="stock"
        type="checkbox"
        @change="sendFilter"
        v-model="filterBy.stockFilter"
      />
      <label for="stock" @click="updateStock" :class="stockClass">{{stockText}}</label>
    </div>
  </div>
</template>

<script>
import selectFilter from "./select-filter.vue";

export default {
  data() {
    return {
      filterBy: {
        sortBy: "name",
        searchWord: null,
        stockFilter: false,
      },
        isStock: false,
    };
  },
  methods: {
    sendFilter(sort) {
      this.filterBy.sortBy = sort;
      const filter = this.filterBy;
      this.$store.dispatch({ type: "setFilter", filter });
    },
    updateStock() {
      this.isStock = (this.isStock) ? false : true;
    },
  },
  computed: {
    stockClass() {
      return (this.isStock) ? 'checked' : 'not-checked'
    },
    stockText() {
      return (this.isStock) ? 'In Stock!' : 'In Stock?'
    },
  },
  components: {
    selectFilter,
  },
};
</script>

<style>
</style>