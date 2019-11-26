import React from "react";
import "./App.css";
import Contador from "./parent2child/Contador";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Clases y estados
        </p>
      </header>
        <Contador />
    </div>
  );
}

export default App;
