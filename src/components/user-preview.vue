<template>
  <li>
    <h3>Username: {{user.username}}</h3>
    <p>Fullname: {{user.fullname}}</p>
    <p>Password: {{user.password}}</p>
    <button @click="sendRemove(user._id)">Delete user</button>
  </li>
</template>

<script>
export default {
  props: ["user"],
  methods: {
    sendRemove(id) {
      console.log('id:', id)
      this.$emit("remove-user", id);
    },
  },
};
</script>