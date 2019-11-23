import React from "react";
import './card.css';
import thumb from "./01-luke.jpeg";

const Card = () => {
    return (
       <div class="card">
           <div class="card__image">
                <img src={thumb}/>
           </div>
           <div class="card__info">
               <p><span>Nombre</span> Luke Skywalker</p>
               <p><span>Altura</span> 177</p>
               <p><span>Peso</span> 77</p>
               <p><span>Color de pelo</span>Rubio</p>
               <p><span>Color de piel</span>clara</p>
               <p><span>Color de ojos</span>azul</p>
               <p><span>Año de nacimiento</span>19BBY</p>
               <p><span>Sexo</span>masculino</p>
           </div>
       </div>
    );
}

export default Card;

