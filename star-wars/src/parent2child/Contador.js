import React, { Component } from "react";
import Incrementador from "./Incrementador";

class Contador extends Component {
  state = {
    valor: 0
  };


    setNewVal = (val) => {
        this.setState(
            {
                valor: this.state.valor + val
            }
        )
    }




  render() {

      return (
        <div>
            {this.state.valor}
            <div>
                <Incrementador onclk={this.setNewVal} valor={+1}/>
                <Incrementador onclk={this.setNewVal}  valor={-1}/>
            </div>
        </div>
      )
  }
}

export default Contador;
