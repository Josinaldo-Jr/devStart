function BarraDeNavegacao(props) {
  let nomeCompleto = `${props.usuario.nome} ${props.usuario.sobrenome}`;
  let idadeFinal = props.usuario.idade + 1;

  return (
    <div>
      Olá, {nomeCompleto}.<br />
      Você tem {idadeFinal} anos de idade agora.
    </div>
  );
}

export default BarraDeNavegacao;
