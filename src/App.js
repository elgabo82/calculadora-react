import { useState } from 'react';

import './App.css';

import { BotonComponent } from './components/BotonComponent';
import { DisplayComponent } from './components/DisplayComponent';

function App() {
  const colorBoton = "#f2a33c";

  const [texto, setTexto] = useState("");
  const [resultado, setResultado] = useState("");

  const ingresarTexto = (valor) => {        
    setTexto((texto) => [...texto, valor + " "]);    
  };

  return (
    <div className="App">
      <div className="calculadora">
        <DisplayComponent texto={texto} resultado={resultado}/>
        <div className="fila">
          <BotonComponent simbolo='1' hClic={ingresarTexto}/>
          <BotonComponent simbolo='2' hClic={ingresarTexto}/>
          <BotonComponent simbolo='3' hClic={ingresarTexto}/>
          <BotonComponent simbolo='+' color={colorBoton} hClic={ingresarTexto}/>
        </div>

        <div className="fila">
          <BotonComponent simbolo='4' hClic={ingresarTexto}/>
          <BotonComponent simbolo='5' hClic={ingresarTexto}/>
          <BotonComponent simbolo='6' hClic={ingresarTexto}/>
          <BotonComponent simbolo='-' color={colorBoton} hClic={ingresarTexto}/>
        </div>

        <div className="fila">
          <BotonComponent simbolo='7' hClic={ingresarTexto}/>
          <BotonComponent simbolo='8' hClic={ingresarTexto}/>
          <BotonComponent simbolo='9' hClic={ingresarTexto}/>
          <BotonComponent simbolo='*'color={colorBoton} hClic={ingresarTexto}/>
        </div>

        <div className="fila">
          <BotonComponent simbolo='.' hClic={ingresarTexto}/>
          <BotonComponent simbolo='0' hClic={ingresarTexto}/>
          <BotonComponent simbolo='=' hClic={ingresarTexto}/>
          <BotonComponent simbolo='/' hClic={ingresarTexto}color={colorBoton} />
        </div>
        <BotonComponent simbolo='C' color="lightblue" hClic={ingresarTexto}/>
        
      </div>
    </div>
  );
}

export default App;
