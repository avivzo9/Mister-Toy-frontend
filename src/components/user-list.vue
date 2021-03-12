<template>
  <div class="user-list-container container">
    <div class="user-list sub-container">
      <ul>
        <user-preview
          @remove-user="removeUser"
          v-for="user in users"
          :key="user._id"
          :user="user"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui';
import userPreview from "./user-preview.vue";

export default {
  props: ['users'],
  methods: {
    removeUser(id) {
      this.$store.dispatch({ type: "removeUser", id })
        .then(() => Message.success('User has been deleted!'))
        .catch(() => Message.error('Colud\'nt delete user, please try again later.'))
    },
  },
  components: {
    userPreview,
  },
};
</script>