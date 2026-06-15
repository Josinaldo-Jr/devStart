import React from 'react';
import './App.css';
import ExpressoesJSX from './pages/ExpressoesJSX';
import PraticaJSX from './pages/PraticaJSX';
import Componentes from './pages/Componentes';
import PraticaProps from './pages/Props';
import ProjetoI from './pages/ProjetoI';
import './components/KitUI/style.css';
import FuncoesPuras from './pages/FuncoesPuras';
import JSXAvancado from './pages/JSXAvancado';
import ProjetoII from './pages/ProjetoII';
import DesestruturacaoDeMatrizes from './pages/DesestruturacaoDeMatrizes';
import StateComHooks from './pages/StateComHooks';

// ------------------- //
function App() {
   
  return (
    <div>
      <h1>Trilha 3 - React - Fase 1</h1>
      <p>React.version: {React.version}</p>
      <hr />
      <ExpressoesJSX />  
      <hr />   
      <PraticaJSX />
      <hr />
      <Componentes />
      <hr />
      <PraticaProps />
      <hr />
      <ProjetoI />
      <hr />
      <FuncoesPuras />
      <hr />
      <JSXAvancado />
      <hr />
      <ProjetoII />
      <hr />
      <DesestruturacaoDeMatrizes />
      <hr />
      <StateComHooks />
    </div>
  );
}

export default App;
