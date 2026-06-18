import Vitrine from "../components/LojaVirtual/ProdutoVitrine";
import { useState } from "react";

function ProjetoIII() {
  const [entrou, setEntrou] = useState(false);

  if (entrou) {
    return (
      <>
        <h2>20-Projeto III:</h2>
        <button className="btn btn-outline" onClick={() => setEntrou(false)}>
          Sair
        </button>

        <Vitrine />
      </>
    );
  }

  return (
    <>
      <h2>20-Projeto III:</h2>

      <h3>Por favor, entre</h3>
      <button className="btn btn-primary" onClick={() => setEntrou(true)}>
        Entrar
      </button>
    </>
  );
}

export default ProjetoIII;
