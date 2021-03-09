<template>
  <div class="filter sub-container">
    <input type="search" placeholder="Search" @keyup="sendFilter" v-model="filterBy.searchWord" />
    <select @change="sendFilter" v-model="filterBy.sortBy">
      <option value="name">Name</option>
      <option value="price">Price</option>
    </select>
      <input name="stock" type="checkbox" @change="sendFilter" v-model="filterBy.stockFilter">
      <label for="stock">stock</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        sortBy: 'name',
        searchWord: null,
        stockFilter: false
      }
    };
  },
  methods: {
    sendFilter() {
      const filter = this.filterBy;
      this.$store.dispatch({ type: "setFilter", filter });
    },
  },
};
</script>

<style>
</style>