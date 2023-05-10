import React from 'react';
import logo from './logo.svg';
import './App.css';
;

function App() {
  function BoaNoite(){
    console.log('Boa Noite');
  }
  function BomDia(){
    console.log('Bom dia!');

  }

  function Somar(){
    const resultado = 5 + 5;
    console.log(resultado)
  
  }
  function Multiplicação(){
    const resultado = 5 * 5;
    console.log(resultado)

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => Multiplicação()} style={{
          backgroundColor:'SkyBlue', 
          fontSize:'24px', 
          fontFamily:'roboto',
          borderRadius:'15px',
          padding:'10px 20px',
          borderColor:'SkyBlue',
          color:'black'
          }}> 
          Resultado
          </button>
      </header>
    </div>
  );
}

export default App;
