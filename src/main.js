import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./index.css";
import firebase from "firebase/compat/app";

// Firebase Credentials
const firebaseConfig = {
  apiKey: "AIzaSyAwfv0cPv34-F3iZG0VcyoPoH1ThhC3fUU",
  authDomain: "bojio-6872d.firebaseapp.com",
  projectId: "bojio-6872d",
  storageBucket: "bojio-6872d.appspot.com",
  messagingSenderId: "241861072577",
  appId: "1:241861072577:web:a6ac74db414d155e02a640",
};

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
