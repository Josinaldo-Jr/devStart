import ContagemRegressiva from "../components/ContagemAdequada/ContagemRegressiva";
import Relogio from "../components/ContagemAdequada/Relogio";
import ContadorModos from "../components/ContagemAdequada/ContadorComModos";
import ContadorConfiguravel from "../components/ContagemAdequada/ContadorConfiguravel";


function MudancaDeEstadoCondicional() { 

  return (
    <>
      <h2>18-Mudança de estado condicional:</h2>
      <ContagemRegressiva />
      <br />
      <Relogio />
      <br />
      <ContadorModos modo="incremento" />
      <br />
      <ContadorModos modo="decremento" />
      <br />
      <ContadorConfiguravel incrementarDe={1}  />                      
      <ContadorConfiguravel incrementarDe={2}  />                      
      <ContadorConfiguravel incrementarDe={5}  />                      
    </>
  );
}

export default MudancaDeEstadoCondicional;