<template>
  <div id="content">
    <form @submit.prevent="submitForm" class="container p-4 mx-auto" novalidate>
      <h1 class="text-2xl md:text-3xl mb-1 md:mb-2 font-medium">Login</h1>
      <p class="text-base mb-2 md:mb-2">Hi, Welcome back 👋</p>

      <div class="login-with-google-btn mt-3">
        <img
          class="google-icon"
          src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
          alt="google-icon"
        />
        <a class="text-sm">Sign in with Google</a>
      </div>

      <p class="text-divider"><span>Or</span></p>

      <div class="form-control">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="johndoe@email.com"
          v-model.trim="email"
          @blur="checkUserEmail"
        />
        <div
          v-if="error.email != ''"
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
            <span class="font-medium">{{ error.email }}</span>
          </div>
        </div>
      </div>
      <div class="form-control">
        <label for="password">Password</label>

        <div class="relative">
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            v-model="password"
            @blur="checkUserPassword"
          />
          <div
            @click="switchVisibility"
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
            <span class="font-medium">{{ error.password }}</span>
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="flex flex-row items-center">
          <input
            id="rememberMeCheckbox"
            type="checkbox"
            class="checkbox rounded"
            v-model="rememberMeCheckbox"
            @change="rememberMe"
          />
          <label for="rememberMeCheckbox" class="md:ml-2">Remember Me</label>
        </div>
        <router-link to="/forgot-password" class="text-sm"
          >Forget Password?</router-link
        >
      </div>
      <base-button class="w-full py-2.5 my-4">Login</base-button>
      <div class="flex justify-center">
        <p class="mr-1 text-sm">Not registered yet?</p>
        <router-link to="/signup" class="text-sm font-medium underline"
          >Create an account</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email:
        localStorage.getItem("userEmail") != null
          ? localStorage.getItem("userEmail")
          : "",
      password: "",
      rememberMeCheckbox:
        localStorage.getItem("userEmail") != null ? true : false,
      showPassword: false,
      error: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    rememberMe() {
      if (this.rememberMeCheckbox) {
        localStorage.setItem("userEmail", this.email);
      } else {
        localStorage.removeItem("userEmail");
      }
    },
    switchVisibility() {
      const passwordField = document.querySelector("#password");
      if (passwordField.getAttribute("type") === "password") {
        passwordField.setAttribute("type", "text");
        this.showPassword = true;
      } else {
        passwordField.setAttribute("type", "password");
        this.showPassword = false;
      }
    },
    checkUserEmail() {
      if (this.email.length == 0) {
        this.error.email = "Email field cannot be empty";
        return false;
      } else if (!this.email.includes("@")) {
        this.error.email = "Invalid email address";
        return false;
      }
      this.error.email = "";
      return true;
    },
    checkUserPassword() {
      if (this.password.length == 0) {
        this.error.password = "Password field cannot be empty";
        return false;
      }
      this.error.password = "";
      return true;
    },
    submitForm() {
      this.checkUserEmail();
      this.checkUserPassword();
      if (this.error.email == "" && this.error.password == "") {
        this.login();
      }
    },
    async login() {
      try {
        const loginResult = await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        const loadUserDataResult = await this.$store.dispatch("loadUserData");
        if (loginResult && loadUserDataResult) {
          this.$router.replace("/events");
        }
      } catch (err) {
        if (err === "EMAIL_NOT_FOUND") {
          this.error.email =
            "We couldn't find an account with that email address.";
          this.error.password = "";
          this.password = "";
        }
        if (err == "INVALID_PASSWORD") {
          this.error.password =
            "The password you entered is incorrect. Please try again.";
          this.error.email = "";
          this.password = "";
        }
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

.checkbox {
  width: 15px;
  height: 15px;
}

.google-icon {
  width: 20px;
  height: 20px;
  margin: 12px;
}

.login-with-google-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  border: 1px solid #eee;
  border-radius: 5px;
  color: #757575;
  font-weight: 500;
  text-align: center;
  background-color: white;
}

.text-divider {
  font-size: 14px;
  color: #787878;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #eee;
  line-height: 0.1em;
  margin: 30px 0;
}

.text-divider span {
  background: #fff;
  padding: 0 10px;
}
</style>
