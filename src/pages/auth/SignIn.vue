<template>
  <base-alert
    v-if="showDialog"
    classes="text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
  >
    <template #default>
      <p>{{ error }}</p>
    </template>
    <template #actions>
      <button
        @click="dismissDialog"
        type="button"
        class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300"
        data-dismiss-target="#alert-2"
        aria-label="Close"
      >
        <span class="sr-only">Close</span>
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </template>
  </base-alert>
  <div>
    <form @submit.prevent="submitForm" class="container p-4 mx-auto">
      <div class="form-control">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Your email address"
          v-model.trim="email"
        />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input
          class="w-full"
          v-if="showPassword"
          type="text"
          v-model="password"
        />
        <input
          class="w-full"
          v-else
          type="password"
          id="password"
          placeholder="••••••••"
          v-model="password"
        />
      </div>
      <div class="flex justify-between">
        <div class="flex flex-row items-center">
          <input
            id="rememberMeCheckbox"
            type="checkbox"
            value=""
            class="checkbox rounded"
            v-model="rememberMeCheckbox"
          />
          <label
            for="rememberMeCheckbox"
            class="ml-2 text-gray-900 dark:text-gray-300"
            >Remember Me</label
          >
        </div>
        <router-link to="/forgot-password">Forget Password?</router-link>
      </div>
      <base-button class="w-full py-2.5 my-4">Login</base-button>
      <div class="flex justify-center">
        <p class="mr-1">Not registered yet?</p>
        <router-link to="/signup">Create an account</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import BaseAlert from "../../components/UI/BaseAlert.vue";

export default {
  components: { BaseAlert },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      rememberMeCheckbox: false,
      showPassword: false,
      error: null,
      showDialog: false,
    };
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    async submitForm() {
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        this.$router.replace("/events");
      } catch (err) {
        //this.error = err.message || "Failed to authenticate, try later";
      }
    },
    dismissDialog() {
      this.showDialog = false;
    },
  },
};
</script>

<style scoped>
form {
  max-width: 520px;
}

.form-control {
  margin: 0.8rem 0;
}

label {
  font-weight: 400;
  color: #787878;
}

input {
  display: block;
  width: 100%;
  font-weight: 400;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 0.5rem 1rem;
}

.checkbox {
  width: 15px;
  height: 15px;
}
</style>
