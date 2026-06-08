import CarrinhoDeCompras from "../components/PraticaProps/CarrinhoDeCompras";
import BarraDeNavegacao from "../components/PraticaProps/MaisProps";
import Botao from "../components/PraticaProps/Botao1";
import Botao2 from "../components/PraticaProps/Botao2";

function PraticaProps() {

  return (
    <>
      <h2>8-Props:</h2>

        <CarrinhoDeCompras contagem={5}/>
        <BarraDeNavegacao usuario={{nome: "João", sobrenome: "Silva"}} notificacoes={["Notificação 1", "Notificação 2", "Notificação 3"]} />        
        <Botao tamanho="pequeno" />
        <br />
        <Botao tamanho="medio" />
        <br />
        <Botao tamanho="enorme" />
        <br />
        <Botao2>Botão com children</Botao2>
    </>
  );
}

export default PraticaProps;