<template>
  <li>
    <h3>{{ toy.name }}</h3>
    <div>
      <div>
        <small>{{ toy.type }}</small> | <small>Price: {{ toy.price }}</small>
      </div>
      <div class="toy-details-buttons flex">
        <router-link class="link font-size" :to="'/edit/' + toy._id">🖊</router-link>
        |
        <router-link class="link" :to="'/toy/' + toy._id"><font-awesome-icon icon="expand"></font-awesome-icon></router-link>
        |
        <button class="font-size" @click="sendRemove(toy._id)">🗑</button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["toy"],
  methods: {
    sendRemove(id) {
      this.$emit("remove-toy", id);
    },
    sendToDetails(toy) {
    this.$router.push(`/toy/' + ${toy._id}`)
    }
  },
};
</script>