<template>
  <validation-provider rules="required" v-slot="{ errors }">
    <div class="edit-inputs flex">
      <input type="text" validate v-model="toyToEdit.name" placeholder="Toy name">
      <input type="number" validate v-model="toyToEdit.price" placeholder="Toy price">
      <input type="text" validate v-model="toyToEdit.type" placeholder="Toy type">
      <button @click="sendSaveToy">Save</button>
    </div>
  <span class="valid-error">{{ errors[0] }}</span>
</validation-provider>
    
</template>

<script>
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import { ValidationProvider } from "vee-validate";

extend("required", {
  ...required,
  message: "This field is required",
});

export default {
  props: ['toyToEdit'],
  components: {
    ValidationProvider,
  },
  methods: {
    sendSaveToy() {
      console.log('saved!');
      this.$emit('save-toy', this.toyToEdit)
    }
  }
};
</script>

<style scoped>
.valid-error {
  color: red;
  background-color: rgba(128, 128, 128, 0.2);
}
</style>