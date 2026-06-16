import { useState } from "react";

function ContagemRegressiva() {
  const [contagem, setContagem] = useState(10);
  function handleButtonClick() {
    setContagem(contagem - 1);
  }
  return (
    <>
      <h2>{contagem} vezes restante</h2>
      <button onClick={handleButtonClick}>Contagem Regressiva</button>
    </>
  );
}

export default ContagemRegressiva;