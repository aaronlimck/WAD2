import { createApp } from "vue";
import "./index.css";

// IMPORT MAIN APPLICATION COMPONENT
import router from "./router.js";
import App from "./App.vue";

// IMPORT BASE COMPONENTS
import BaseButton from "./components/UI/BaseButton.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";
import BaseInput from "./components/UI/BaseInput.vue";
import NavigationBar from "./components/Layout/NavigationBar.vue";

// INITIALISE APPLICATION
const app = createApp(App);

app.use(router);

// INITIALISE BASE COMPONENTS
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);
app.component("navigation-bar", NavigationBar);
app.component("base-input", BaseInput);

// MOUNT APPLICATION
app.mount("#app");
