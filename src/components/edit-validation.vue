<template>
  <div>
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="sendSaveToy" class="toy-edit-form flex">
        <validation-provider class="valid flex" rules="required" v-slot="{ errors }">
          <input
            type="text"
            validate
            v-model="toyToEdit.name"
            placeholder="Toy name"
          />
          <span class="valid-error">{{ errors[0] }}</span>
        </validation-provider>
        <validation-provider class="valid flex" rules="required" v-slot="{ errors }">
          <input
            type="number"
            validate
            v-model="toyToEdit.price"
            placeholder="Toy price"
          />
          <span class="valid-error">{{ errors[0] }}</span>
        </validation-provider>
        <validation-provider class="valid flex" rules="required" v-slot="{ errors }">
          <input
            type="text"
            validate
            v-model="toyToEdit.type"
            placeholder="Toy type"
          />
          <span class="valid-error">{{ errors[0] }}</span>
        </validation-provider>
        <button :disabled="invalid">Save</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import { ValidationProvider, ValidationObserver } from "vee-validate";

extend("required", {
  ...required,
  message: "This field is required",
});

export default {
  props: ["toyToEdit"],
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    sendSaveToy() {
      this.$emit("save-toy", this.toyToEdit);
    },
  },
};
</script>

<style scoped>
.valid-error {
  color: red;
  background-color: rgba(128, 128, 128, 0.2);
}
</style>