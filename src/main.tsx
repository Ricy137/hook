import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import "./index.css";
import "uno.css";
import ModalRender from "@components/Modal";
import { ToastRender } from "@components/Toast";
import Providers from "@modules/Providers";
import { registerSW } from "virtual:pwa-register";

registerSW({ immediate: true });

// if ("serviceWorker" in navigator) {
//   // && !/localhost/.test(window.location)) {
//   registerSW();
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <ToastRender />
      <ModalRender />
      <AppRouter />
    </Providers>
  </React.StrictMode>
);
