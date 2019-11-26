import React, {Component} from "react";


class Btn extends Component{

    state = {
        indice:1
    }

    /*
    constructor(props){
        super(props);

    }

     */


    handleClick(ev){
        this.setState({
            indice: this.state.indice + 1
        });
    }



    /* proposal */

    /*
    handleClick = (ev) => {
        this.setState({
            indice: this.state.indice + 1
        });
    }
    */

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>{this.state.indice}</button>
        );
    }

}

export default Btn;
