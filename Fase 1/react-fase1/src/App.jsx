import React from 'react';
import './App.css'
import ExpressoesJSX from './pages/ExpressoesJSX';



// ------------------- //
function App() {
   
  return (
    <div>
      <h1>Trilha 3 - React - Fase 1</h1>
      <p>React.version: {React.version}</p>
      <hr />
      <ExpressoesJSX />  
      <hr />   
    </div>
  );
}

export default App;
