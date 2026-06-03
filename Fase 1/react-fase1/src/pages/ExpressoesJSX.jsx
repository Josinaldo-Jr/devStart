import Notificacoes from "../components/ExpressoesJSX/Notificacoes";
import BarraDeNavegacao from "../components/ExpressoesJSX/BarraDeNavegacao";
import BotaoDePagamento from "../components/ExpressoesJSX/BotaoDePagamento";
import MetodoDePagamento from "../components/ExpressoesJSX/MetodoDePagamento";

function ExpressoesJSX() {
  const notificacoes = [
    {
      idNotificacao: 1,
      texto: "Seu pedido foi entregue",
    },
    {
      idNotificacao: 2,
      texto: "Seu pedido expirou",
    },
  ];

  const usuario = {
    nome: "Santana",
    sobrenome: "Amorim",
    idade: 27,
    esta_logado: true,
  };

  return (
    <div>
      <h2>5-Expressões JSX:</h2>

      <Notificacoes notificacoes={notificacoes} />

      <BarraDeNavegacao usuario={usuario} />

      <BotaoDePagamento usuario={usuario} />
      
      <MetodoDePagamento nome="Cartao" />

      <MetodoDePagamento nome="Paypal" />
      
    </div>
  );
}

export default ExpressoesJSX;