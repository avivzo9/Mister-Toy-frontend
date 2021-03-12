<template>
  <section class="container">
    <div class="sub-container">
      <userList :users="users" />
    </div>
  </section>
</template>

<script>
import userList from "../components/user-list";

export default {
  name: "adminCmp",
  computed: {
    users() {
      return this.$store.state.userStore.users;
    },
  },
  components: {
    userList,
  },
};
</script>