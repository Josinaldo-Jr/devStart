import { useState } from "react";

export function Produto(props) {
  const [quantidade, setQuantidade] = useState(0);

  function handleAdicionar() {
    setQuantidade(quantidade + 1);
  }

  function handleSubtrair() {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  }

  return (
    <div className="produto">
      <img src={props.detalhes.imagem} width="50" alt="" />
      <div className="info-do-produto">
        <h2>{props.detalhes.nome}</h2>
        <p>{props.detalhes.descricao}</p>
      </div>
      <div className="botoes-produto">
        <button className="produto-subtrai" onClick={handleSubtrair}>
          -
        </button>
        <h3 className="produto-quantidade">{quantidade}</h3>
        <button className="produto-adiciona" onClick={handleAdicionar}>
          +
        </button>
      </div>
    </div>
  );
}

function Vitrine() {
  // dados dos produtos para este projeto
  const produtos = [
    {
      nome: "Queijo",
      descricao: "200g de queijo em bloco",
      imagem:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649404/react-tutorial/products/cheese.png",
    },
    {
      nome: "Leite",
      descricao: "1L de Leite",
      imagem:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649400/react-tutorial/products/milk.png",
    },
  ];

  return (
    <div className="vitrine">
      {/* renderizar os dois Produtos aqui */}
      <Produto detalhes={produtos[0]} />
      <Produto detalhes={produtos[1]} />
    </div>
  );
}

export default Vitrine;
