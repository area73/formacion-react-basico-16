import React from "react";

import "./App.css";
import CardFetch from "./CardFetch";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Personajes de Star Wars
        </p>
      </header>
      <div style={{width:'200px', padding:'10px', display:'inline-block'}}>
        <CardFetch  characterId="1"/>
      </div>
        <div style={{width:'200px', padding:'10px',  display:'inline-block'}}>
            <CardFetch characterId="2"/>
        </div>
        <div style={{width:'200px', padding:'10px',  display:'inline-block'}}>
            <CardFetch characterId="4"/>
        </div>
    </div>
  );
}

export default App;
