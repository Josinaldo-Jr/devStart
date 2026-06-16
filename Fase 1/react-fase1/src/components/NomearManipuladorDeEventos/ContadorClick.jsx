import { useState } from "react";

function ContadorClick() {
  const [vezes, setVezes] = useState(0);
  function handleButtonClick() {
    setVezes(vezes + 1);
  }
  return (
    <>
      <h2>{vezes} vezes clicado</h2>
      <button onClick={handleButtonClick}>Adiciona 1</button>
    </>
  );
}

export default ContadorClick;
