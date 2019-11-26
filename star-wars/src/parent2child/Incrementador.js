import React from "react";




const Incrementador = ({valor, onclk}) => {

   //  const onClickEvnt = () => onclk(valor);

    return(
        <button onClick={() => onclk(valor)}>{valor}</button>
    )
}


export default Incrementador;
