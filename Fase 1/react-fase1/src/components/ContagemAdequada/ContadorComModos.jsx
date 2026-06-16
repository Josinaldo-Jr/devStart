import { useState } from "react";

function ContadorModos(props) {
  const [contagem, setContagem] = useState(0);

  function handleCliqueDoBotao() {
    if (props.modo === "incremento") {
      setContagem(contagem + 1);
    } else if (props.modo === "decremento") {
      setContagem(contagem - 1);
    }
  }

  return (
    <>
      <h2>{props.modo} contagem</h2>
      <h3>{contagem} vezes</h3>
      <button onClick={handleCliqueDoBotao}>{props.modo}</button>
    </>
  );
}

export default ContadorModos;
