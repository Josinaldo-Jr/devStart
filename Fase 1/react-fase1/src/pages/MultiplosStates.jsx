import ContagemRegressiva from "../components/ContadorVidas/ContagemRegressiva";
import Contador from "../components/ContadorVidas/Contador";

function MultiplosStates() {


  return (
    <>
      <h2>21-Múltiplos States:</h2>

      <ContagemRegressiva />
      <Contador desabilitado={true} />
      <Contador desabilitado={false} />

      
    </>
  );
}

export default MultiplosStates;
