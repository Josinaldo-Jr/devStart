import { useState } from "react";

function Relogio() {
  const [segundos, setSegundos] = useState(0);

  function handleIncrementarPeloClique() {
    if (segundos === 59) {
      setSegundos(0);
    } else {
      setSegundos(segundos + 1);
    }
  }

  return (
    <>
      <h3>{segundos} segundos</h3>
      <button onClick={handleIncrementarPeloClique}>Adicionar 1</button>
    </>
  );
}

export default Relogio;
