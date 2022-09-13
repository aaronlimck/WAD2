<template>
  <section>
    <div class="container mx-auto">
      <!-- <h1>This is Sign Up Page</h1>
      <div class="flex flex-col items-center">
        <input
          class="mb-2"
          type="email"
          placeholder="Enter your email"
          ref="email"
        />
        <input
          type="password"
          placeholder="Enter your password"
          ref="password"
        />
        <base-button class="py-1 px-4 mt-3" @click="register"
          >Sign Up</base-button
        >
      </div> -->

      <div class="flex flex-col items-center">
        <base-input
          name="email"
          type="email"
          placeholder="Email"
          cRef="username"
        />
        <base-input name="password" type="password" placeholder="Password" />
        <base-button class="py-1 px-4 mt-3" @click="tryError"
          >Get Started</base-button
        >
      </div>
    </div>
  </section>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import BaseButton from "../UI/BaseButton.vue";

export default {
  components: { BaseButton },
  data() {
    return {};
  },
  methods: {
    tryError() {
      console.log(this.$refs.username);
    },
    register() {
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;
      const router = useRouter();
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Successfully registered!");
          console.log(user);
          router.push("/feed"); // redirect to the feed
          // ...
        })
        .catch((error) => {
          console.log(error);
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // ..
        });
    },
  },
};
</script>

<style scoped>
input {
  display: block;
  min-width: 320px;
  font-weight: 300;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 0.5rem 1rem;
}
</style>
