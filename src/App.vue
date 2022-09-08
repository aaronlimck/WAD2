<template>
  <navigation-bar />
  <!-- 60PX IS TO OFFSET THE NAVIGATION BAR-->
  <main style="padding-top: 60px">
    <!-- PLACEHOLDER TELLING VUE ROUTER THAT THIS IS THE PLACE TO ROUTE THE COMPONENT AND LOAD IT -->
    <router-view />
  </main>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@300;400;500;600;700;800&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto Flex", sans-serif;
  font-weight: 400;
}

body {
  margin: 0;
}
</style>
