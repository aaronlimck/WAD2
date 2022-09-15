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
        <p>{{ errorMessage }}</p>
        <base-button class="py-1 px-4 mt-3" @click="login">Login</base-button>
      </div>
    </div>
  </section>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      enteredEmail: "",
      enteredPassword: "",
      errorMessage: "",
    };
  },
  methods: {
    getEmail(value) {
      this.enteredEmail = value;
    },
    getPassword(value) {
      this.enteredPassword = value;
    },
    login() {
      console.log(
        `email:${this.enteredEmail} and password: ${this.enteredPassword}`
      );
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.enteredEmail, this.enteredPassword)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Successfully login!");
          localStorage.setItem("userID", user.uid);
          console.log(user);
          console.log(localStorage.getItem("userID"));
          // ...
        })
        .catch((error) => {
          console.log(error.code);
          console.log(error.message);
        });
    },
  },
};
</script>
n

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
