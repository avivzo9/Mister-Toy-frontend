<template>
  <section class="dashboard-container container">
      <price-dashboard v-if="types && prices"
      :types="types"
      :prices="prices"
      class="dashboard flex" />
  </section>
</template>

<script>
import priceDashboard from "../components/price-dashboard";
import inventoryDashboard from "../components/inventory-dashboard";
export default {
  computed: {
    types() {
      return this.$store.getters.getToysTypes
    },
    prices() {
      return this.$store.getters.getToysPrices
    }
  },
  components: {
    priceDashboard,
    inventoryDashboard,
  },
};
</script>

<style>
</style>