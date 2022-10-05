<template>
  <div>
    <form @submit.prevent="submitForm" class="container p-4 mx-auto">
      <div class="form-control">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="First and last name"
          v-model.trim="name"
        />
      </div>
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
        <div
          class="flex py-2 mb-4 text-sm text-stone-700 rounded-lg"
          role="alert"
        >
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Password must:</span>
            <ul class="mt-1.5 ml-4 text-stone-800 list-disc list-inside">
              <li>Be a minimum of 8 characters</li>
              <li>Include at least one lowercase letter (a-z)</li>
              <li>Include at least one uppercase letter (A-Z)</li>
              <li>Include at least one number (0-9)</li>
            </ul>
          </div>
        </div>
      </div>
      <base-button class="w-full py-2.5 mb-4">Create my account</base-button>
      <p class="text-sm text-center text-gray-900">
        By continuing, you agree to the Terms of use, Privacy Policy, and
        Community Standards of Bojio
      </p>
      <p class="text-center mt-4">Already have an account? Log In</p>
    </form>
  </div>
</template>

<script>
import BaseButton from "../../components/UI/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      showPassword: false,
      errorMsg: "",
    };
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    submitForm() {
      if (this.password.length < 6) {
        this.errorMsg = "Password must be more than";
      }
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
</style>
