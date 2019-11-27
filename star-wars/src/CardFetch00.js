import React, {Component } from "react";
import "./card.css";
import Btn from "./Btn";


class CardFetch extends Component {

    state = {};

    render() {


        return (
            <div className="card">
                <div className="card__image">
                    <img src={this.props.props.img} alt="imagen personaje"/>
                </div>
                <div className="card__info">
                    <p>
                        <span>Nombre</span>
                        {this.props.props.name}
                    </p>
                    <p>
                        <span>Altura</span> {this.props.props.height}
                    </p>
                    <p>
                        <span>Peso</span> {this.props.props.mass}
                    </p>
                    <p>
                        <span>Color de pelo</span>
                        {this.props.props.hair_color}
                    </p>
                    <p>
                        <span>Color de piel</span>
                        {this.props.props.skin_color}
                    </p>
                    <p>
                        <span>Color de ojos</span>
                        {this.props.props.eye_color}
                    </p>
                    <p>
                        <span>Año de nacimiento</span>
                        {this.props.props.birth_year}
                    </p>
                    <p>
                        <span>Sexo</span>
                        {this.props.props.gender}
                    </p>
                    <Btn enlace={this.props.props.enlace} />
                </div>
            </div>
        );
    }

    componentDidMount() {

    }

}


export default CardFetch;
