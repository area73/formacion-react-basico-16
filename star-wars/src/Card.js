import React from "react";
import './card.css';
import thumb from "./01-luke.jpeg";

const Card = ({props}) => {
    // TODO: DESTRCUTURING
    /*
    const {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender} = {...props};
    */
    return (
       <div class="card">
           <div class="card__image">
                <img src={thumb}/>
           </div>
           <div class="card__info">
               <p><span>Nombre</span>{props.name}</p>
               <p><span>Altura</span> {props.height}</p>
               <p><span>Peso</span> {props.mass}</p>
               <p><span>Color de pelo</span>{props.hair_color}</p>
               <p><span>Color de piel</span>{props.skin_color}</p>
               <p><span>Color de ojos</span>{props.eye_color}</p>
               <p><span>Año de nacimiento</span>{props.birth_year}</p>
               <p><span>Sexo</span>{props.gender}</p>
           </div>
       </div>
    );
}

export default Card;

