import BarraDeNavegacao from "../components/TransformandoImpuroEmPuro/BarraDeNavegacao";

function FuncoesPuras() {

  return (
    <>
      <h2>10-Funções Puras:</h2>
      <BarraDeNavegacao usuario={{ nome: "João", sobrenome: "Silva", idade: 30 }} />   
    </>
  );
}

export default FuncoesPuras;