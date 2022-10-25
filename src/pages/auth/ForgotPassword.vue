<template>
  <base-dialog v-if="showDialog">
    <template #default>
      <div class="flex items-center">
        <img
          class="success-icon mr-3"
          src="../../assets/verified.gif"
          alt="success"
        />
        <p>Password reset instructions sent to email address</p>
      </div>
    </template>
    <template #actions>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
        @click="confirmDialogMsg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </template>
  </base-dialog>

  <div id="content">
    <form @submit.prevent="submitForm" class="container p-4 mx-auto">
      <h1 class="text-2xl md:text-3xl mb-1 md:mb-2 font-medium">
        Forgot Password
      </h1>
      <p class="text-base mb-2 md:mb-2">
        Provide your information for reset instructions
      </p>
      <div class="form-control">
        <label for="email">Email address</label>
        <input
          type="email"
          id="email"
          placeholder="Your email address"
          v-model.trim="email"
          @:blur="validator"
        />
        <div
          v-if="errorMsg.length != 0"
          class="flex p-4 my-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          <svg
            aria-hidden="true"
            class="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">{{ errorMsg }}</span>
          </div>
        </div>
      </div>
      <base-button class="w-full py-2.5 my-4">Reset password</base-button>
    </form>

    <router-link to="/login" class="flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-6 mr-2 text-gray-600"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
      <p class="text-center text-sm font-medium text-gray-600">
        Back to log in
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false,
      email: "",
      errorMsg: "",
    };
  },
  methods: {
    resetPasswordDialog() {
      this.showDialog = true;
      setTimeout(() => {
        this.showDialog = false;
        this.$router.replace("/login");
      }, 3000);
      return;
    },
    confirmDialogMsg() {
      this.showDialog = false;
    },
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
        const result = await this.$store.dispatch("passwordResetEmail", {
          email: this.email,
        });
        if (result) {
          this.resetPasswordDialog();
        }
      } catch (err) {
        console.log(err);
        if (err === "EMAIL_NOT_FOUND") {
          this.errorMsg =
            "We couldn't find an account with that email address.";
        }
      }
    },
  },
};
</script>

<style scoped>
#content {
  padding-top: 50px;
}

form {
  max-width: 520px;
}

.form-control {
  margin: 0.8rem 0;
}

label {
  font-size: 14px;
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

.success-icon {
  width: 48px;
  height: 48px;
}
</style>
