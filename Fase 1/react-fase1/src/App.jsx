import React from 'react';
import './App.css';
import ExpressoesJSX from './pages/ExpressoesJSX';
import PraticaJSX from './pages/PraticaJSX';
import Componentes from './pages/Componentes';
import PraticaProps from './pages/Props';
import KitUI from './pages/KitUI';
import './components/KitUI/style.css';
import FuncoesPuras from './pages/FuncoesPuras';
import JSXAvancado from './pages/JSXAvancado';

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
      <KitUI />
      <hr />
      <FuncoesPuras />
      <hr />
      <JSXAvancado />
      <hr />
    </div>
  );
}

export default App;
