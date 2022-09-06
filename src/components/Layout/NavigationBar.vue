<template>
  <nav class="bg-white fixed border-gray-200 px-2 sm:px-4 py-2.5">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <div>Logo</div>
      <div class="flex flex-wrap items-center">
        <ul class="mr-10">
          <li>Events</li>
        </ul>
        <base-button mode="flat" class="mr-3">Log In</base-button>
        <base-button>Sign Up</base-button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  height: 4.5rem;
  width: 100%;
  border-bottom: 1px solid #eee;
}
</style>
