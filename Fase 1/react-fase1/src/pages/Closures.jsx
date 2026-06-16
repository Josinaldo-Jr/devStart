import ObterUsuario from "../components/PraticaClosures/ObterUsuario";
import ObterUsuarioIdade from "../components/PraticaClosures/ObterUsuarioIdade";

function Closures() {

  const usuario = ObterUsuario("Josinaldo", "Júnior");
  const usuarioIdade = ObterUsuarioIdade(18);

  return (
    <>
      <h2>16-Closures:</h2>
      <p>Nome: {usuario.nome}</p>
      <p>Sobrenome: {usuario.sobrenome}</p>
      <p>Nome Completo: {usuario.obterNomeCompleto()}</p>
      <p>Pode votar: {usuarioIdade.obterPodeVotar() ? "Sim" : "Não"}</p>               
    </>
  );
}

export default Closures;