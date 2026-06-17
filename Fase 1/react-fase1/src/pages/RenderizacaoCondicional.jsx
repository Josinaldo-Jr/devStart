import Admin from "../components/PermissoesAdministrador/TipoDoUsuario";
import Painel from "../components/PermissoesAdministrador/Painel";
import BarraDeNavegacao from "../components/PermissoesAdministrador/BarraDeNavegacao";

function RenderizacaoCondicional() { 

  const notificacoes = [{
    idNotificacao: 1,
    texto: "Bem-vindo ao nosso supermercado"
}, {
    idNotificacao: 2,
    texto: "Seu pedido já foi enviado"
}, {
    idNotificacao: 3,
    texto: "Seu pedido já foi enviado"
}];

  return (
    <>
      <h2>19-Renderização Condicional:</h2>
      <Admin tipoDeUsuario="admin"/>
      <Admin tipoDeUsuario="cliente"/>
      <Painel entrou={true} />
      <Painel entrou={false} />
      <BarraDeNavegacao notificacoes={notificacoes} />
      <BarraDeNavegacao notificacoes={[]} />
                           
    </>
  );
}

export default RenderizacaoCondicional;