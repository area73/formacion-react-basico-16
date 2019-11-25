import React from "react";
import "./card.css";
import Btn from "./Btn";

const Card = ({props}) => {

    const {
        img,
            name,
            height,
            mass,
            hair_color,
            skin_color,
            eye_color,
            birth_year,
            gender,
            enlace
    } = props;
  return (
    <div className="card">
      <div className="card__image">
        <img src={img} alt="imagen personaje"/>
      </div>
      <div className="card__info">
        <p>
          <span>Nombre</span>
          {name}
        </p>
        <p>
          <span>Altura</span> {height}
        </p>
        <p>
          <span>Peso</span> {mass}
        </p>
        <p>
          <span>Color de pelo</span>
          {hair_color}
        </p>
        <p>
          <span>Color de piel</span>
          {skin_color}
        </p>
        <p>
          <span>Color de ojos</span>
          {eye_color}
        </p>
        <p>
          <span>Año de nacimiento</span>
          {birth_year}
        </p>
        <p>
          <span>Sexo</span>
          {gender}
        </p>
        <Btn enlace={enlace} />
      </div>
    </div>
  );
};

export default Card;
