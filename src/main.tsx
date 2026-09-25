import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Enable scroll-reveal styles only when JS runs and the visitor hasn't asked for reduced motion
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.classList.add("reveal-ready");
}

createRoot(document.getElementById("root")!).render(<App />);
