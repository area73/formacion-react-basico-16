import React from "react";
import "./App.css";
import Btn from "./Btn";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Clases y estados
        </p>
      </header>
        <div style={{padding:'20px'}}>
            Contador: <Btn  />
        </div>
    </div>
  );
}

export default App;
