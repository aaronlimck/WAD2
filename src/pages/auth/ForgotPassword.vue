<template>
  <div class="text-center mt-10">
    <h1 class="text-xl">Forgot Password</h1>
    <p class="text-slate-500">
      Provide your information for reset instructions
    </p>
  </div>

  <form @submit.prevent="submitForm" class="container p-4 mx-auto">
    <div class="form-control">
      <label for="email">Email address</label>
      <input
        type="email"
        id="email"
        placeholder="Your email address"
        v-model.trim="email"
        @:blur="validator"
      />
      <p v-if="errorMsg.length != 0" class="text-sm text-amber-800 mt-2">
        {{ errorMsg }}
      </p>
    </div>
    <base-button class="w-full py-2.5 my-4">Reset password</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      errorMsg: "",
    };
  },
  methods: {
    validator() {
      if (this.email.length == 0) {
        this.errorMsg = "Email is required";
      } else if (this.email.length > 0 && !this.email.includes("@")) {
        this.errorMsg = "Invalid Email";
      } else {
        this.errorMsg = "";
      }
    },
    async submitForm() {
      try {
        await this.$store.dispatch("resetpassword", {
          email: this.email,
        });
      } catch (err) {
        this.error = err.message || "Failed to authenticate, try later";
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
