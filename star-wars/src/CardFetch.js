import React, {Component } from "react";
import "./card.css";



class CardFetch extends Component {

    state = {
        data: {}
    };

    render() {
        return (
            <div className="card">
                <div className="card__image">
                    <img src="01-luke.jpeg" alt="imagen personaje"/>
                </div>
                {this.state.data.name}
            </div>
        );
    }

    componentDidMount() {
        fetch(`https://swapi.co/api/people/${this.props.characterId}/`)
            .then(response => response.json())
            .then(data => {
                this.setState({data})
            });
        }
}


export default CardFetch;
