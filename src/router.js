import { createRouter, createWebHistory } from "vue-router";

// IMPORT ROUTES COMPONENTS
import TheHome from "./pages/home/TheHome.vue";
import BrowseEvents from "./pages/events/BrowseEvents.vue";
import TheEventProfilePage from "./pages/events/TheEventProfilePage.vue";
// AUTHENTICATION
import SignIn from "./pages/auth/SignIn.vue";
import SignUp from "./pages/auth/SignUp.vue";
import ForgotPassword from "./pages/auth/ForgotPassword.vue";
import ResetPassword from "./pages/auth/ResetPassword.vue";
// USER (STUDENT)
import TheProfile from "./pages/user/TheProfile.vue";
// USER (CLUB)
import TheDashboard from "./pages/club/TheDashboard.vue";
import CreateEventForm from "./pages/club/CreateEventForm.vue";
import OneEventForm from "./pages/club/OneEventForm.vue";
// ERROR
import UnauthorizationAccess from "./pages/errors/UnauthorizationAccess.vue";

import store from "./store/index.js";

function isAuthenticated() {
  const authResult = store.getters.isAuthenticated;
  if (authResult) {
    return "/events";
  }
}

function dashboardAccess() {
  const clubId = localStorage.getItem("userClub");
  if (clubId === "null" || clubId === "undefined") {
    return "/unauthorised";
  }
}

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
      path: "/events/:id",
      name: "TheEventProfilePage",
      component: TheEventProfilePage,
    },
    {
      path: "/login",
      component: SignIn,
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/signup",
      component: SignUp,
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/forgot-password",
      component: ForgotPassword,
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/reset-password",
      component: ResetPassword,
      beforeEnter: [isAuthenticated],
    },
    {
      path: "/profile",
      component: TheProfile,
      meta: { requireAuth: true },
    },
    {
      path: "/dashboard",
      component: TheDashboard,
      beforeEnter: [dashboardAccess],
    },
    {
      path: "/create-event",
      component: CreateEventForm,
      meta: { requireAuth: true },
      beforeEnter: [dashboardAccess],
    },
    {
      path: "/edit-event/:id",
      component: OneEventForm,
      meta: { requireAuth: true },
      beforeEnter: [dashboardAccess],
    },
    {
      path: "/unauthorised",
      component: UnauthorizationAccess,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
