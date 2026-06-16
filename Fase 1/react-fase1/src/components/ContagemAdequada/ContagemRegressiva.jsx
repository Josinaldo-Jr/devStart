import { useState } from "react";

function ContagemRegressiva() {
  const [contagem, setContagem] = useState(5);

  function handleDecrementarPeloClique() {
    if (contagem > 0) {
      setContagem(contagem - 1);
    }
  }

  return (
    <>
      <h2>{contagem} vezes restante</h2>
      <button onClick={handleDecrementarPeloClique}>Contagem Regressiva</button>
    </>
  );
}

export default ContagemRegressiva;
