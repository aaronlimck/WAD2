<template>
  <base-dialog v-if="showDialog" classes="w-80">
    <template #background>
      <base-confetti />
    </template>
    <template #default>
      <div class="flex flex-col items-center">
        <img
          class="success-icon"
          src="../../assets/verified.gif"
          alt="success"
        />
        <div class="mt-5">
          <h1
            class="text-2xl mb-2 md:mb-3 text-center uppercase text-green-600"
          >
            Success
          </h1>
          <p class="text-center">
            Congratulations, your account has been successfully created.
          </p>
        </div>
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
        @click="closeDialogMsg"
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
    <form @submit.prevent="submitForm" class="container p-4 mx-auto" novalidate>
      <h1 class="text-2xl md:text-3xl mb-1 md:mb-2 font-medium">
        Create an account
      </h1>
      <p class="text-base mb-2 md:mb-2">
        Better way to discover events in SMU 🎉
      </p>
      <div class="form-control">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          v-model.trim="userName"
          @blur="checkUserName"
        />
        <div
          v-if="error.name != ''"
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
            <span class="font-medium">{{ error.name }}</span>
          </div>
        </div>
      </div>
      <div class="form-control">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
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
            placeholder="Create a password"
            v-model="password"
            @focus="showPassRequirements"
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

        <div
          v-show="showPasswordRequirements"
          class="fade-in flex p-3 my-4 text-sm text-stone-700 rounded-lg custom-border"
          role="alert"
        >
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Password requirements met!</span>
            <ul class="mt-1.5 ml-4 text-stone-800 list-disc list-inside">
              <li
                :style="[
                  password.length < 7
                    ? 'color: red'
                    : 'color: green; text-decoration: line-through',
                ]"
              >
                Be a minimum of 8 characters
              </li>
              <li
                :style="[
                  !stringContainsLowercase(password)
                    ? 'color: red'
                    : 'color: green; text-decoration: line-through',
                ]"
              >
                Include at least one lowercase letter (a-z)
              </li>
              <li
                :style="[
                  !stringContainsUppercase(password)
                    ? 'color: red'
                    : 'color: green; text-decoration: line-through',
                ]"
              >
                Include at least one uppercase letter (A-Z)
              </li>
              <li
                :style="[
                  !stringContainsNumber(password)
                    ? 'color: red'
                    : 'color: green; text-decoration: line-through',
                ]"
              >
                Include at least one number (0-9)
              </li>
            </ul>
          </div>
        </div>
      </div>
      <base-button class="w-full py-2.5 mt-2 mb-4"
        >Create my account</base-button
      >
      <p class="text-sm text-center text-gray-900">
        By continuing, you agree to the
        <span class="underline">Terms of use</span>,
        <span class="underline">Privacy Policy</span>, and
        <span class="underline">Community Standards</span> of Bojio
      </p>
      <div class="flex justify-center mt-4">
        <p class="mr-1 text-sm">Already have an account?</p>
        <router-link to="/login" class="text-sm font-medium underline"
          >Log In</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import BaseConfetti from "../../components/UI/BaseConfetti.vue";

export default {
  components: { BaseConfetti },
  data() {
    return {
      showDialog: false,
      userName: "",
      email: "",
      password: "",
      showPassword: false,
      showPasswordRequirements: false,
      error: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  watch: {
    password(newValue) {
      this.password = newValue;
    },
  },
  methods: {
    start() {
      this.$confetti.start();
    },
    stop() {
      this.$confetti.stop();
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
    showPassRequirements() {
      this.showPasswordRequirements = true;
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
    checkUserName() {
      if (this.userName.length == 0) {
        this.error.name = "Name field cannot be empty";
        return false;
      }
      this.error.name = "";
      return true;
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
    checkUserPassword(str) {
      const pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)");
      if (this.password.length == 0) {
        this.error.password = "Password field cannot be empty";
        return false;
      }
      this.error.password = "";
      return pattern.test(str) && str.length >= 8;
    },
    submitForm() {
      this.checkUserName();
      this.checkUserEmail();
      this.checkUserPassword(this.password);
      if (
        this.error.name == "" &&
        this.error.email == "" &&
        this.checkUserPassword(this.password)
      ) {
        this.signUp();
      }
    },
    async signUp() {
      try {
        const createResultStatus = await this.$store.dispatch("signup", {
          email: this.email,
          password: this.password,
        });
        const createDataInStoreStatus = await this.$store.dispatch(
          "createUser",
          {
            userName: this.userName,
            userEmail: this.email,
          }
        );
        if (createResultStatus && createDataInStoreStatus) {
          const redirect = localStorage.getItem("eventHistory");
          console.log(redirect);
          if (redirect != null) {
            this.confirmDialogMsg();
            setTimeout(() => {
              this.$router.replace(redirect);
            }, 4000);
          } else {
            this.confirmDialogMsg();
            setTimeout(() => {
              this.$router.replace("/events");
            }, 4000);
          }
        }
      } catch (err) {
        if (err === "EMAIL_EXISTS") {
          this.error.email = "This email address has already been taken";
          this.error.password = "";
          this.password = "";
        }
        console.log(err);
      }
    },
    closeDialogMsg() {
      this.showDialog = false;
      this.$router.replace("/events");
    },
    confirmDialogMsg() {
      this.showDialog = true;
    },
  },
};
</script>

<style scoped>
#content {
  padding: 50px 0px;
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

.success-icon {
  width: 80px;
  height: 80px;
}
</style>
