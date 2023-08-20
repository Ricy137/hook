import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import "./index.css";
import "uno.css";
import { registerSW } from "virtual:pwa-register";
import ModalRender from "@components/Modal";
import Providers from "@modules/Providers";

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <ModalRender />
      <AppRouter />
    </Providers>
  </React.StrictMode>
);
