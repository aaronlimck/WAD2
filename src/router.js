import { createRouter, createWebHistory } from "vue-router";

// IMPORT ROUTES COMPONENTS
import TheHome from "./pages/home/TheHome.vue";
import BrowseEvents from "./components/Events/BrowseEvents.vue";
import SignIn from "./pages/auth/SignIn.vue";
import SignUp from "./pages/auth/SignUp.vue";
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
      component: SignIn,
    },
    {
      path: "/signup",
      component: SignUp,
    },
    {
      path: "/profile",
      component: TheProfile,
    },
  ],
});

export default router;
