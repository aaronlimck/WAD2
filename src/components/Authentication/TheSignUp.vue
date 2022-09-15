<template>
  <section>
    <div class="container mx-auto">
      <div class="flex flex-col items-center">
        <base-input
          name="email"
          type="email"
          placeholder="Email"
          @input-value="getEmail"
        />
        <base-input
          name="password"
          type="password"
          placeholder="Password"
          @input-value="getPassword"
        />
        <base-button class="py-1 px-4 mt-3" @click="register"
          >Get Started</base-button
        >
      </div>
    </div>
  </section>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import BaseButton from "../UI/BaseButton.vue";

export default {
  components: { BaseButton },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    getEmail(value) {
      this.email = value;
    },
    getPassword(value) {
      this.password = value;
    },
    register() {
      const email = this.email;
      const password = this.password;
      console.log(`email:${email} and password: ${password}`);
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Successfully registered!");
          console.log(user);
          // ...
        })
        .catch((error) => {
          console.log(error);
          console.log(error.message);
          console.log(error.code);
          if (error.message === "auth/email-already-in-use") {
            this.errorExist = true;
          }
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
