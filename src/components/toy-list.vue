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
import { Message } from 'element-ui';
import toyFilter from "./toy-filter.vue";
import toyPreview from "./toy-preview.vue";

export default {
  props: ['toys'],
  methods: {
    removeToy(id) {
      this.$store.dispatch({ type: "removeToy", id })
        .then(() => Message.success('Toy has been deleted!'))
        .catch(() => Message.error('Colud\'nt delete toy, please try again later.'))
    },
  },
  components: {
    toyPreview,
    toyFilter,
  },
};
</script>