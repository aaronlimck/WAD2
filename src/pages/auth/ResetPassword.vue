<template>
  <div id="content">
    <form @submit.prevent="submitForm" class="container p-4 mx-auto">
      <h1 class="text-2xl md:text-3xl mb-1 md:mb-2 font-medium">
        Set New Password
      </h1>
      <p class="text-base mb-2 md:mb-2">
        Your new password must be different to previously used passwords.
      </p>
      <div class="form-control">
        <label for="password">Password</label>
        <div class="relative">
          <input
            id="password"
            type="password"
            placeholder="Create a new password"
            v-model="password"
            @focus="showPassRequirements"
            @blur="
              checkUserPassword();
              showPassRequirements();
            "
          />
          <div
            @click="switchVisibilityPassword"
            class="absolute right-0 bottom-0 font-medium rounded-lg text-sm px-3 py-2"
          >
            <span v-if="showPassword"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </span>
            <span v-if="showPassword != true"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div
          v-if="error.password != ''"
          class="fade-in flex p-4 my-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
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
            <span class="font-medium">{{ error.password }}</span>
          </div>
        </div>

        <div
          v-show="showPasswordRequirements"
          class="fade-in flex p-3 my-4 text-sm text-stone-700 rounded-lg custom-border"
          role="alert"
        >
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Password must:</span>
            <ul class="mt-1.5 ml-4 text-stone-800 list-disc list-inside">
              <li
                :style="[password.length < 7 ? 'color: red' : 'color: green']"
              >
                Be a minimum of 8 characters
              </li>
              <li
                :style="[
                  !stringContainsLowercase(password)
                    ? 'color: red'
                    : 'color: green',
                ]"
              >
                Include at least one lowercase letter (a-z)
              </li>
              <li
                :style="[
                  !stringContainsUppercase(password)
                    ? 'color: red'
                    : 'color: green',
                ]"
              >
                Include at least one uppercase letter (A-Z)
              </li>
              <li
                :style="[
                  !stringContainsNumber(password)
                    ? 'color: red'
                    : 'color: green',
                ]"
              >
                Include at least one number (0-9)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="form-control">
        <label for="confirmPassword">Confirm Password</label>
        <div class="relative">
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            v-model="confirmPassword"
            @blur="checkConfirmPassword()"
          />

          <div
            @click="switchVisibilityConfirmPassword"
            class="absolute right-0 bottom-0 font-medium rounded-lg text-sm px-3 py-2"
          >
            <span v-if="showConfirmPassword"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </span>
            <span v-if="showConfirmPassword != true"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div
          v-if="error.confirmPassword != ''"
          class="fade-in flex p-4 my-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
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
            <span class="font-medium">{{ error.confirmPassword }}</span>
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
      password: "",
      showPassword: false,
      confirmPassword: "",
      showConfirmPassword: false,
      showPasswordRequirements: false,
      error: {
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    switchVisibilityPassword() {
      const passwordField = document.querySelector("#password");
      if (passwordField.getAttribute("type") === "password") {
        passwordField.setAttribute("type", "text");
        this.showPassword = true;
      } else {
        passwordField.setAttribute("type", "password");
        this.showPassword = false;
      }
    },
    switchVisibilityConfirmPassword() {
      const passwordField = document.querySelector("#confirmPassword");
      if (passwordField.getAttribute("type") === "password") {
        passwordField.setAttribute("type", "text");
        this.showConfirmPassword = true;
      } else {
        passwordField.setAttribute("type", "password");
        this.showConfirmPassword = false;
      }
    },
    showPassRequirements() {
      const containsUppercase = this.stringContainsUppercase(this.password);
      const containsLowercase = this.stringContainsLowercase(this.password);
      const containsNumber = this.stringContainsNumber(this.password);
      const metLengthRequirement = this.password.length >= 8;

      if (
        containsUppercase &&
        containsLowercase &&
        containsNumber &&
        metLengthRequirement
      ) {
        this.showPasswordRequirements = false;
      } else {
        this.showPasswordRequirements = true;
      }
    },
    stringContainsUppercase(str) {
      const pattern = new RegExp("^(?=.*[A-Z])");
      return pattern.test(str);
    },
    stringContainsLowercase(str) {
      const pattern = new RegExp("^(?=.*[a-z])");
      return pattern.test(str);
    },
    stringContainsNumber(str) {
      const pattern = new RegExp("^(?=.*\\d)");
      return pattern.test(str);
    },
    checkUserPassword() {
      if (this.password.length == 0) {
        this.error.password = "Password field cannot be empty";
        return false;
      }
      this.error.password = "";
      return true;
    },
    checkConfirmPassword() {
      if (this.confirmPassword.length == 0) {
        this.error.confirmPassword = "Confirm password field cannot be empty";
        return false;
      } else if (this.password != this.confirmPassword) {
        this.error.confirmPassword = "Password do not match";
      }
      this.error.confirmPassword = "";
      return true;
    },
    submitForm() {
      if (this.error.password == "" && this.error.confirmPassword == "") {
        this.resetPassword();
      }
    },
    async resetPassword() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const oobCode = urlParams.get("oobCode");
      console.log(oobCode);
      try {
        const result = await this.$store.dispatch("resetPassword", {
          oobCode: oobCode,
          newPassword: this.password,
        });
        console.log(result);
      } catch (err) {
        console.log(err);
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

.fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.custom-border {
  border: 1px solid #eee;
}
</style>
