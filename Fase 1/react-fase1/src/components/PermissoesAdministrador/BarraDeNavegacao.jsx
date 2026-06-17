function BarraDeNavegacao(props) {
  return (
    <>
      <h3>Bem-vindo usuário</h3>
      {props.notificacoes.length > 0 && (
        <p>Você tem {props.notificacoes.length} notificações</p>
      )}
    </>
  );
}

export default BarraDeNavegacao;