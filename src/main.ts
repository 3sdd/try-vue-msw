import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

if (import.meta.env.DEV) {
  const { worker } = await import("./mocks/browser");
  worker.start({
    // デフォルト設定だとwarningがたくさん出るため
    onUnhandledRequest: "bypass",
  });
}

const app = createApp(App);

app.use(router);

app.mount("#app");
