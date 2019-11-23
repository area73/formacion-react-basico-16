import React from "react";

import "./App.css";
import Card from "./Card";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Personajes de Star Wars
        </p>
      </header>
      <div style={{width:'200px', padding:'10px', display:'inline-block'}}>
        <Card />
      </div>
        <div style={{width:'200px', padding:'10px',  display:'inline-block'}}>
            <Card />
        </div>
        <div style={{width:'200px', padding:'10px',  display:'inline-block'}}>
            <Card />
        </div>
    </div>
  );
}

export default App;
