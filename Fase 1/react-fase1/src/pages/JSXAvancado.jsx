import BemVindoUsuario from "../components/RenderizacaoCondicional/BemVindoUsuario";
import TemaEscuro from "../components/RenderizacaoCondicional/TemaEscuro";
import TemaEscuroII from "../components/RenderizacaoCondicional/TemaEscuroII";
import Botao from "../components/UIKit/Botao";

function JSXAvancado() {

  return (
    <>
      <h2>11-JSX Avançado:</h2>

      <BemVindoUsuario usuario={{ nome: 'João' }} />
      <BemVindoUsuario usuario={null} />
      <br />
      <TemaEscuro tema="escuro" />
      <TemaEscuro tema="claro" />
      <br />
      <TemaEscuroII tema="escuro" />
      <TemaEscuroII tema="claro" />
      <br />
      <Botao onClick={() => alert("Botão clicado!")}>Clique aqui</Botao>
      <br />
      <Botao disabled={true}>Não clique aqui</Botao>
    </>
  );
}

export default JSXAvancado;