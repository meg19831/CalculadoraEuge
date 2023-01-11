import React from "react";
import './botonClear.css'


const BotonClear = (props) => {
  return (
    <div className="botn-clear"
    onClick={props.manejarClear}>
        {props.children}
    </div>
  )
}

export default BotonClear