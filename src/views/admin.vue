<template>
  <section class="container">
    <div class="sub-container">
      <h1>Admin control</h1>
      <ul v-if="users">
        <li v-for="user in users" :key="user._id">
          Name: {{ user.fullname }}, Username: {{ user.username }}, Password:
          {{ user.password }}
          <!-- <button @click="sendDeleteUser(user._id)">Delete user</button> -->
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "adminCmp",
  methods: {
    sendDeleteUser(id) {
      // userService.deleteUser(id)
      //     .then(() => this.loadUsers())
    },
  },
  computed: {
      users() {
          return this.$store.state.userStore.users;
      }
  },
};
</script>