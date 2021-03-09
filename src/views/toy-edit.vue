<template>
  <section class="toy-edit-container container" v-if="toyToEdit">
    <div class="toy-edit sub-container">
      <h1>Toy edit</h1>
      <validation @save-toy="saveToy" :toyToEdit="toyToEdit" />
    </div>
  </section>
</template>

<script>
import { toyService } from "../services/toy.service.js";
import validation from "../components/validation";

export default {
  name: "edit-toy",
  data() {
    return {
      toyToEdit: null,
    };
  },
  methods: {
    saveToy(toy) {
      console.log("toy:", toy);
      //   const toy = this.toyToEdit;
      this.$store
        .dispatch({ type: "saveToy", toy })
        .then(() => this.$router.push("/toy"));
    },
  },
  created() {
    const id = this.$route.params.toyId;
    if (id) {
      toyService.getToyById(id).then((toy) => (this.toyToEdit = toy));
    } else this.toyToEdit = toyService.getEmptyToy();
  },
  components: {
    validation,
  },
};
</script>