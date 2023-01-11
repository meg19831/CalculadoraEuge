
import './App.css';
import BotonClear from './componentes/boton-clear/BotonClear';
import Boton from './componentes/boton/Boton';
import Pantalla from './componentes/pantalla/Pantalla';
import logoCalculadora from './imagenes/logoCalculadora.png'
import { useState } from 'react';
import {evaluate} from 'mathjs'

function App() {

  const[ input, setInput]= useState('');

  const agregarInput = (val)=>{
    setInput(input+val)
  }

  const calcularResultado =()=>{

    if (input) {
      setInput(evaluate(input));
    }else{
      alert('Por favor ingrese valores para realizar algún cálculo')
    }
    
  };


  return (
    <div className='App'>
    <div className='logo-contenedor'>
      <img className='imagen-logo' src={logoCalculadora} alt='logo de la calculadora' />
    </div>
    <div className='contenedor-calculadora'>

      <Pantalla input={input} />
      <div className='fila'>

        <Boton manejarClick={agregarInput}>1</Boton>
        <Boton manejarClick={agregarInput}>2</Boton>
        <Boton manejarClick={agregarInput}>3</Boton>
        <Boton manejarClick={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClick={agregarInput}>4</Boton>
        <Boton manejarClick={agregarInput}>5</Boton>
        <Boton manejarClick={agregarInput}>6</Boton>
        <Boton manejarClick={agregarInput}>-</Boton>
      </div>
        
      <div className='fila'>
        <Boton manejarClick={agregarInput}>7</Boton>
        <Boton manejarClick={agregarInput}>8</Boton>
        <Boton manejarClick={agregarInput}>9</Boton>
        <Boton manejarClick={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClick={calcularResultado}>=</Boton>
        <Boton manejarClick={agregarInput}>0</Boton>
        <Boton manejarClick={agregarInput}>.</Boton>
        <Boton manejarClick={agregarInput}>/</Boton>
        </div>
      <div className='fila'>
        <BotonClear manejarClear={()=> setInput ('')}>
          Clear
        </BotonClear>
      </div>

    </div>
    </div>
  );
}

export default App;
