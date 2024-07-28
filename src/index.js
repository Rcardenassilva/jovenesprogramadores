/*
const element = document.createElement("h1"); //creamos elemento
element.innerText = "Bienvenido Ricardo Cardenas"; //el texto que vamos a colocar

const container = document.getElementById('root'); //creamos variable que obtiene la id

container.appendChild(element); //que queremos mostrar
*/

import React from 'react';
import ReactDom from 'react-dom';


const style = {
  color: "red"
}
function tictac(){
  const element = (
    <div>
      <h1 style={style}>Reloj en React!</h1>
      <h2>son las {new Date().toLocaleTimeString()}</h2>
    </div>
  ); 
  const container = document.getElementById('root');
  ReactDom.render(element, container);
}
setInterval(tictac, 1000);