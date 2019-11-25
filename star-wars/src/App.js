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
        <Card  props={
            {
                img:"01-luke.jpeg",
                name: "Luke Skywalker",
                height: "172",
                mass: "77",
                hair_color: "blond",
                skin_color: "fair",
                eye_color: "blue",
                birth_year: "19BBY",
                gender: "male",
                enlace:"http://www.sw01.com"
            }
        }/>
      </div>
        <div style={{width:'200px', padding:'10px',  display:'inline-block'}}>
            <Card props={
                {
                img:"Darth-Vader.jpg",
                name: "Darth Vader",
                height: "202",
                mass: "136",
                hair_color: "none",
                skin_color: "white",
                eye_color: "yellow",
                birth_year: "41.9BBY",
                gender: "male",
                enlace:"http://www.sw02.com"
                }
            }/>
        </div>
        <div style={{width:'200px', padding:'10px',  display:'inline-block'}}>
            <Card props={
                {
                    img:"leia-organa.jpg",
                    name: "Leia Organa",
                    height: "150",
                    mass: "49",
                    hair_color: "brown",
                    skin_color: "light",
                    eye_color: "brown",
                    birth_year: "19BBY",
                    gender: "female",
                    enlace:"http://www.sw03.com"
                }
            }/>
        </div>
    </div>
  );
}

export default App;
