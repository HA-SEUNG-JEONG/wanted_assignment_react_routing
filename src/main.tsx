import React from "react";
import ReactDOM from "react-dom/client";
import Route from "./components/Route";
import Router from "./components/Router";
import About from "./pages/About";
import Root from "./pages/Root";

const container = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  </React.StrictMode>
);
