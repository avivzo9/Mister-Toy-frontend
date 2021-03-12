<template>
  <div>
    <ValidationObserver v-slot="{ invalid }">
      <div class="login sub-container" v-if="!loggedInUser">
        <button @click="toLogin" v-if="!isLogin && !isSignup">Login</button>
        <button @click="toSignup" v-if="!isLogin && !isSignup">Signup</button>
        <div class="inputs-container flex">
          <div class="flex" v-if="isSignup">
            <form @submit.prevent="signup">
              <validation-provider
                class="valid flex"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  type="text"
                  v-model="user.fullname"
                  placeholder="full name"
                />
                <span class="valid-error">{{ errors[0] }}</span>
              </validation-provider>
              <validation-provider
                class="valid flex"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  type="text"
                  v-model="user.username"
                  placeholder="username"
                />
                <span class="valid-error">{{ errors[0] }}</span>
              </validation-provider>
              <validation-provider
                class="valid flex"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  type="password"
                  v-model="user.password"
                  placeholder="password"
                />
                <span class="valid-error">{{ errors[0] }}</span>
              </validation-provider>
              <button :disabled="invalid">Signup</button>
            </form>
          </div>
          <div class="flex" v-if="isLogin">
            <form @submit.prevent="login">
              <validation-provider
                class="valid flex"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  type="text"
                  v-model="user.username"
                  placeholder="username"
                />
                <span class="valid-error">{{ errors[0] }}</span>
              </validation-provider>
              <validation-provider
                class="valid flex"
                rules="required"
                v-slot="{ errors }"
              >
                <input
                  type="password"
                  v-model="user.password"
                  placeholder="password"
                />
                <span class="valid-error">{{ errors[0] }}</span>
              </validation-provider>
              <button :disabled="invalid">Login</button>
            </form>
          </div>
          <button @click="closeAll" v-if="isLogin || isSignup">Back</button>
        </div>
      </div>
      <div class="logout sub-container" v-if="loggedInUser">
        <button @click="logout">Logout</button>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import { userService } from "../services/user.service.js";
import { ValidationProvider, ValidationObserver } from "vee-validate";

extend("required", {
  ...required,
  message: "This field is required",
});

export default {
  props: ["loggedInUser"],
  data() {
    return {
      isLogin: false,
      isSignup: false,
      user: null,
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    login() {
      this.$emit("login", this.user);
    },
    signup() {
      this.$emit("signup", this.user);
    },
    logout() {
      this.$emit("logout");
    },
    toLogin() {
      this.isLogin = true;
      this.isSignup = false;
      this.user = userService.getLoginUser();
    },
    toSignup() {
      this.isSignup = true;
      this.isLogin = false;
      this.user = userService.getEmptyUser();
    },
    closeAll() {
      this.isSignup = false;
      this.isLogin = false;
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