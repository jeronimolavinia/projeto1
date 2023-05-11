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
    const soma = 5 + 5;
    console.log(`O resultado da soma é: ${soma}`); //`O resultado da soma é: ${soma}` >> INTERPOLAÇÃO Utilizando $
  
  }
  function Multiplicação(){
    const multiplicação = 5 * 5;
    console.log(`O resultado da multiplicação é: ${multiplicação}`)

  }
  function Subtração(){
    const subtracao = 5 - 5;
    console.log(`O resultado da subtração é: ${subtracao}`)

  }
  function Divisão(){
    const dividir = 5 / 5;
    console.log(`O resultado da divisão é: ${dividir}`)

  }

  function Calcular(){
    Somar()
    Multiplicação()
    Subtração()
    Divisão()

  }
  function Nome(){
    const nome = "Lavínia";
    console.log(`Nome: ${nome}`); //`O resultado da soma é: ${soma}` >> INTERPOLAÇÃO Utilizando $
  
  }
  function Sobrenome(){
    const sobrenome = "Jerônimo";
    console.log(`Sobrenome: ${sobrenome}`)

  }
  function Idade(){
    const idade = "25 anos"
    console.log(`Idade: ${idade}`)

  }
  function Nascimento(){
    const aniversário = "07 de Novembro de 1997";
    console.log(`Nascimento: ${aniversário}`)

  }

  function MeusDados(){
    Nome()
    Sobrenome()
    Idade()
    Nascimento()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() =>Calcular()} style={{
          backgroundColor:'MediumSpringGreen', 
          fontSize:'24px', 
          fontFamily:'roboto',
          borderRadius:'15px',
          padding:'10px 20px',
          borderColor:'MediumSpringGreen',
          color:'black'
          }}> 
          Resultados
          </button>
          <button onClick={() =>MeusDados()} style={{
          backgroundColor:'BlueViolet', 
          fontSize:'24px', 
          fontFamily:'roboto',
          borderRadius:'15px',
          padding:'10px 20px',
          borderColor:'BlueViolet',
          color:'white'
          }}> 
          Acessar dados
          </button>
      </header>
    </div>
  );
}

export default App;
