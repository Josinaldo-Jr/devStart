import { useState } from "react";

function Contador(props) {
  const [contagem, setContagem] = useState(5);

  function manipularCliqueParaContagem() {
    if (props.desabilitado) {
      setContagem(contagem - 1);
    }
  }

  return (
    <>
      <h3>Tentativas restantes: {contagem}</h3>
      <button onClick={manipularCliqueParaContagem}>Contagem regressiva</button>
    </>
  );
}

export default Contador;
