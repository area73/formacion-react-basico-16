import React from "react";


const BtnComp = ({valor}) => {

    return(
        <button onClick={() => console.log(valor)}>{valor}</button>
    )
}


export default BtnComp;
