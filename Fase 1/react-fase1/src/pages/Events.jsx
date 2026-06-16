import BarraDeNavegacao from "../components/MudarEvent/BarraDeNavegacao";
import Contador from "../components/NomearManipuladorDeEventos/Contador";
import ContadorClick from "../components/NomearManipuladorDeEventos/ContadorClick";
import ContagemRegressiva from "../components/NomearManipuladorDeEventos/ContagemRegressiva";

function Events() { 

  return (
    <>
      <h2>17-Events:</h2>
      <BarraDeNavegacao />
      <br />
      <Contador />
      <br />
      <ContadorClick />
      <br />
      <ContagemRegressiva />                  
    </>
  );
}

export default Events;