<template>
  <section class="toy-edit-container container" v-if="toyToEdit">
    <div class="toy-edit sub-container">
      <h1>Toy edit</h1>
      <edit-validation @save-toy="saveToy" :toyToEdit="toyToEdit" />
    </div>
  </section>
</template>

<script>
import { toyService } from "../services/toy.service.js";
import editValidation from "../components/edit-validation";
import { Message } from "element-ui";

export default {
  name: "edit-toy",
  data() {
    return {
      toyToEdit: null,
    };
  },
  methods: {
    saveToy(toy) {
      this.$store.dispatch({ type: "saveToy", toy })
        .then(() => {
          Message.success("Toy has been saved!");
          this.$router.push("/toy");
        })
        .catch(() =>
          Message.error("Colud'nt save toy, please try again later.")
        );
    },
  },
  created() {
    const id = this.$route.params.toyId;
    if (id) {
      toyService.getToyById(id).then((toy) => {
        this.toyToEdit = toy;
      });
    } else this.toyToEdit = toyService.getEmptyToy();
  },
  components: {
    editValidation,
  },
};
</script>