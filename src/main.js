import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/index";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSpotify,
  faDiscord,
  faLinkedin,
  faReddit,
  faGithub,
  faMastodon,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faSpotify,
  faDiscord,
  faLinkedin,
  faReddit,
  faGithub,
  faMastodon,
  faWhatsapp
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
