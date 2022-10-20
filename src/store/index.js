import { createStore } from "vuex";

import authModule from "./modules/auth/index.js";
import userModule from "./modules/user/index.js";
import eventModule from "./modules/event/index.js";

const store = createStore({
  modules: {
    auth: authModule,
    user: userModule,
    event: eventModule,
  },
});

export default store;
