import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./index.css";
import firebase from "firebase/compat/app";

// Firebase Credentials

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// IMPORT MAIN APPLICATION COMPONENT
import App from "./App.vue";

// IMPORT BASE COMPONENTS
import BaseButton from "./components/UI/BaseButton.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";
import BaseInput from "./components/UI/BaseInput.vue";
import NavigationBar from "./components/Layout/NavigationBar.vue";

// IMPORT ROUTES COMPONENTS
import TheHome from "./components/Home/TheHome.vue";
import BrowseEvents from "./components/Events/BrowseEvents.vue";
import TheLogin from "./components/Authentication/TheLogin.vue";
import TheSignUp from "./components/Authentication/TheSignUp.vue";
import TheProfile from "./components/Profile/TheProfile.vue";

// INITIALISE ROUTES
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: TheHome,
    },
    {
      path: "/events",
      component: BrowseEvents,
    },
    {
      path: "/login",
      component: TheLogin,
    },
    {
      path: "/signup",
      component: TheSignUp,
    },
    {
      path: "/profile",
      component: TheProfile,
    },
  ],
});

// INITIALISE APPLICATION
const app = createApp(App);

// INITIALISE BASE COMPONENTS
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);
app.component("navigation-bar", NavigationBar);
app.component("base-input", BaseInput);

app.use(router);

// MOUNT APPLICATION
app.mount("#app");
