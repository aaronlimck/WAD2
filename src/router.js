import { createRouter, createWebHistory } from "vue-router";

// IMPORT ROUTES COMPONENTS
import TheHome from "./pages/home/TheHome.vue";
import BrowseEvents from "./pages/events/BrowseEvents.vue";
// AUTHENTICATION
import SignIn from "./pages/auth/SignIn.vue";
import SignUp from "./pages/auth/SignUp.vue";
import ForgotPassword from "./pages/auth/ForgotPassword.vue";
// USER (STUDENT)
import TheProfile from "./pages/user/TheProfile.vue";
// USER (CLUB)
import TheDashboard from "./pages/club/TheDashboard.vue";
import CreateEventForm from "./pages/club/CreateEventForm.vue";
import OneEventForm from "./pages/club/OneEventForm.vue";
import OneEventProfilePage from "./pages/club/OneEventProfilePage.vue";


import store from "./store/index.js";

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
      meta: { requireUnauth: true },
    },
    {
      path: "/signup",
      component: SignUp,
      meta: { requireUnauth: true },
    },
    {
      path: "/forgot-password",
      component: ForgotPassword,
      meta: { requireUnauth: true },
    },
    {
      path: "/profile",
      component: TheProfile,
      meta: { requireAuth: true },
    },
    {
      path: "/dashboard",
      component: TheDashboard,
      meta: { requireAuth: true },
    },
    {
      path: "/CreateEventForm",
      component: CreateEventForm,
      meta: { requireAuth: true },
    },{
      path: "/OneEventForm",
      component: OneEventForm,
      meta: { requireAuth: true },
    },
    {
      path: "/OneEventProfilePage",
      name: 'OneEventProfilePage',
      component: OneEventProfilePage,
      meta: { requireAuth: true },
    }
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requireAuth && !store.getters.isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
