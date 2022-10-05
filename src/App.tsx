import { useEffect, useState } from "react";
import "./App.css";
import About from "./component/About";
import Root from "./component/Root";

function App() {
  const [page, setPage] = useState("");

  //뒤로가기 기능
  window.onpopstate = function (event) {
    console.log(`location : ${document.location}, state : ${event.state}`);
    setPage(event.state);
  };

  return (
    <main>
      <button onClick={() => window.history.pushState("root", "root Title", "/")}>Root</button>
      <button onClick={() => window.history.pushState("about", "about Title", "/about")}>
        About
      </button>
      <section>
        {!page && <p>Home!</p>}
        {page === "root" && <Root />}
        {page === "about" && <About />}
      </section>
    </main>
  );
}

export default App;
