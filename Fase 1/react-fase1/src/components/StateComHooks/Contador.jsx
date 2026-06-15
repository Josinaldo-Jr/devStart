import { useState } from "react";

function Contador() {
  const [segundos, setSegundos] = useState(0);

  return (
    <>
      <h3>{segundos} segundos decorridos</h3>
      <button onClick={() => setSegundos(segundos + 1)}>Adiciona 1</button>
    </>
  );
}

export default Contador;
