<template>
  <nav class="bg-white fixed z-20 border-gray-200 px-2 sm:px-4 py-2.5">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <div>
        <router-link to="/">Logo</router-link>
      </div>
      <div class="flex flex-wrap items-center">
        <ul class="mr-10">
          <li><router-link to="/events">Events</router-link></li>
        </ul>
        <router-link to="/login">
          <base-button mode="secondary" class="py-1 px-3 sm:mr-0 md:mr-3"
            >Log In</base-button
          ></router-link
        >
        <router-link class="hidden md:block" to="/signup">
          <base-button class="py-1 px-3">Sign Up</base-button></router-link
        >
      </div>
    </div>
  </nav>
</template>

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
</style>
