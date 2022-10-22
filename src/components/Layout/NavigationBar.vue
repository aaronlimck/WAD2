<template>
  <nav
    class="bg-white fixed border-gray-200 px-4 sm:px-4 py-2.5 flex items-center"
  >
    <div class="container mx-auto flex items-center justify-between">
      <div>
        <router-link to="/">Logo</router-link>
      </div>

      <div class="relative flex items-center">
        <ul class="mr-10">
          <li><router-link to="/events">Events</router-link></li>
        </ul>

        <div v-if="!isLoggedIn" class="flex items-center">
          <router-link to="/login">
            <base-button mode="secondary" class="py-1 px-3 sm:mr-0 md:mr-3"
              >Log In</base-button
            ></router-link
          >
          <router-link class="hidden md:block" to="/signup">
            <base-button class="py-1 px-3">Sign Up</base-button></router-link
          >
        </div>

        <button
          v-if="isLoggedIn"
          @click="dropDown"
          id="dropdownAvatarNameButton"
          data-dropdown-toggle="dropdownAvatarName"
          class="flex items-center text-gray-900 hover:text-blue-600 dark:hover:text-blue-500 md:mr-0"
          type="button"
        >
          <span class="sr-only">Open user menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>

        <div
          v-click-away="onClickAway"
          v-if="isLoggedIn && isOpen"
          class="absolute right-0 top-8 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
        >
          <router-link to="/profile">
            <div
              class="block px-4 py-2 text-gray-800 bg-custom hover:text-white"
            >
              <p>Profile</p>
            </div>
          </router-link>
          <router-link to="/dashboard" v-if="getClubId">
            <div
              class="block px-4 py-2 text-gray-800 bg-custom hover:text-white"
            >
              <p>Dashboard</p>
            </div>
          </router-link>
          <router-link to="/create-event" v-if="getClubId">
            <div
              class="block px-4 py-2 text-gray-800 bg-custom hover:text-white"
            >
              <p>Create Event</p>
            </div>
          </router-link>
          <div class="block px-4 py-2 text-gray-800 bg-custom hover:text-white">
            <p @click="logout">Logout</p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    getClubId() {
      return this.$store.getters.userClub;
    },
  },
  watch: {
    $route() {
      this.isOpen = false;
    },
  },
  methods: {
    onClickAway() {
      this.dropDown();
    },
    dropDown() {
      this.isOpen = !this.isOpen;
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
nav {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #eee;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  background: transparent;
  cursor: pointer;
}

.bg-custom:hover {
  background-color: #f56a01;
}
</style>
