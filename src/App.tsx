import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Vite App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
