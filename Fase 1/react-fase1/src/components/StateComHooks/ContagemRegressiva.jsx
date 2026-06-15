import { useState } from "react";

function Contagem() {
  const [contagem, setContagem] = useState(10);

  return (
    <>
      <h3>{contagem} vezes restante</h3>
      <button onClick={() => setContagem(contagem - 1)}>
        Contagem Regressiva
      </button>
    </>
  );
}

export default Contagem;
