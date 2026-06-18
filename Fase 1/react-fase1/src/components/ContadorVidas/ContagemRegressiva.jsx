import { useState } from "react";

function ContagemRegressiva() {
  const [contagem, setContagem] = useState(5);

  const [vidas, setVidas] = useState(3);

  function ManipularCliqueParaContagemRegressiva() {
    if (contagem > 0) {
      setContagem(contagem - 1);
    } else {
      setVidas(vidas - 1);
      setContagem(5);
    }
  }

  return (
    <>
      <h3>Tentativas restantes: {contagem}</h3>
      <button onClick={ManipularCliqueParaContagemRegressiva}>
        Contagem regressiva
      </button>
      <h4>Vidas restantes {vidas}</h4>
    </>
  );
}

export default ContagemRegressiva;
