<template>
  <TabsWrapper class="mt-6 px-4">
    <Tab title="Profile">
      <form id="content" @submit.prevent="submitForm">
        <h1 class="text-2xl md:text-3xl mb-1 md:mb-2 font-medium">
          Personal Details
        </h1>
        <p class="text-base mb-2 md:mb-2">
          This section contains your basic profile information like name, email
          etc
        </p>

        <label class="text-sm mb-1">Profile Picture</label>
        <div class="custom-border">
          <div class="flex p-4 items-center">
            <div class="profile-image">
              <img
                class="rounded-full"
                src="../../images/avatar.png"
                alt="Avatar"
                style="width: 80px; height: 80px"
              />
            </div>
            <div class="profile-content">
              <button class="py-1 px-2 mr-2 text-sm" id="change_avatar">
                Upload new photo
              </button>
              <button class="py-1 px-2 mr-2 text-sm">Remove</button>
              <p class="text-sm mt-2">
                You can upload jpg. gif or png image files. Max size of 3mb
              </p>
            </div>
          </div>
        </div>

        <div class="form-control">
          <label for="userName">Name</label>
          <input
            id="userName"
            type="text"
            name="userName"
            :value="this.$store.getters.userName"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="form-control">
            <label for="userEmail">Email</label>
            <input
              id="userEmail"
              type="text"
              name="userEmail"
              :value="this.$store.getters.userEmail"
            />
          </div>

          <div class="form-control">
            <label for="userPhone">Phone</label>
            <input
              id="userPhone"
              type="text"
              name="userPhone"
              :value="this.$store.getters.userPhone"
            />
          </div>
        </div>

        <div class="form-control">
          <label for="password">Current Password</label><br />
          <button
            v-show="!showChangePasswordField"
            class="changePassword py-1 px-2 mr-2"
            @click="changePassword"
          >
            Change Password
          </button>

          <div v-show="showChangePasswordField">
            <div class="relative">
              <input
                id="currentPassword"
                type="password"
                placeholder="Current Password"
                v-model="currentPassword"
                @blur="checkCurrentPassword"
              />
              <div
                @click="switchVisibility"
                class="absolute right-0 bottom-0 font-medium rounded-lg text-sm px-3 py-2"
              >
                <span v-if="showCurrentPassword"
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
                <span v-if="showCurrentPassword != true"
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

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div class="relative">
                <label for="newPassword">New Password</label>
                <input
                  id="newPassword"
                  type="password"
                  placeholder="New Password"
                  v-model="newPassword"
                />
                <div
                  @click="switchVisibilityNewPassword"
                  class="absolute right-0 bottom-0 font-medium rounded-lg text-sm px-3 py-2"
                >
                  <span v-if="showNewPassword"
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
                  <span v-if="showNewPassword != true"
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

              <div class="relative">
                <label for="newConfirmPassword">Confirm New Password</label>
                <input
                  id="newConfirmPassword"
                  type="password"
                  placeholder="Confirm New Password"
                  v-model="confirmNewPassword"
                />
                <div
                  @click="switchVisibilityConfirmNewPassword"
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
            </div>
          </div>
        </div>
        <button
          v-show="showChangePasswordField"
          class="changePassword py-1 px-2 mr-2 mb-5"
          @click="changePassword"
        >
          Cancel Change Password</button
        ><br />
        <base-button class="mt-5 py-1 px-3">Save Changes</base-button>
      </form>
    </Tab>

    <Tab title="Registered Events"> </Tab>
  </TabsWrapper>
</template>

<script>
import Tab from "../../components/UI/TheTab.vue";
import TabsWrapper from "../../components/UI/TabsWrapper.vue";

export default {
  components: { Tab, TabsWrapper },
  data() {
    return {
      showCurrentPassword: false,
      showNewPassword: false,
      showConfirmPassword: false,
      showChangePasswordField: false,
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    };
  },
  methods: {
    switchVisibility() {
      const passwordField = document.querySelector("#currentPassword");
      if (passwordField.getAttribute("type") === "password") {
        passwordField.setAttribute("type", "text");
        this.showCurrentPassword = true;
      } else {
        passwordField.setAttribute("type", "password");
        this.showCurrentPassword = false;
      }
    },
    switchVisibilityNewPassword() {
      const passwordField = document.querySelector("#newPassword");
      if (passwordField.getAttribute("type") === "password") {
        passwordField.setAttribute("type", "text");
        this.showNewPassword = true;
      } else {
        passwordField.setAttribute("type", "password");
        this.showNewPassword = false;
      }
    },
    switchVisibilityConfirmNewPassword() {
      const passwordField = document.querySelector("#newConfirmPassword");
      if (passwordField.getAttribute("type") === "password") {
        passwordField.setAttribute("type", "text");
        this.showConfirmPassword = true;
      } else {
        passwordField.setAttribute("type", "password");
        this.showConfirmPassword = false;
      }
    },
    changePassword() {
      this.showChangePasswordField = !this.showChangePasswordField;
    },
    submitForm() {
      console.log(
        this.currentPassword,
        this.newPassword,
        this.confirmNewPassword
      );
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch("loadUserData");
    } catch (err) {
      //this.error = err.message || "Failed to authenticate, try later";
    }
  },
};
</script>

<style scoped>
#content {
  padding: 20px 0px;
}

form {
  max-width: 1200px;
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

.changePassword {
  font-weight: 400;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 0.5rem 1rem;
}

button {
  border: 1px black solid;
  border-radius: 5px;
}

#change_password {
  background-color: #f56a01;
  color: white;
}

.custom-border {
  border: 1px solid #eee;
  border-radius: 5px;
}

.profile-image {
  width: 15%;
}

.profile-content {
  width: 85%;
}

@media screen and (max-width: 640px) {
  .profile-image {
    width: 20%;
  }

  .profile-content {
    width: 80%;
  }
}

@media screen and (max-width: 425px) {
  .profile-image {
    width: 30%;
  }

  .profile-content {
    width: 70%;
  }
}
</style>
