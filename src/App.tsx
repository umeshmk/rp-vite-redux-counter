import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Project - Vite Redux Counter</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          <a
            className="github"
            href="https://github.com/umeshmk/rp-vite-redux-counter/"
          >
            GitHub
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
