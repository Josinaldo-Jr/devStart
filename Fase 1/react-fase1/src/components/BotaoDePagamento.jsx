function BotaoDePagamento({ usuario }) {
  const classe = usuario.esta_logado
    ? "clicavel"
    : "desabilitada";

  return (
    <button className={classe}>
      {usuario.esta_logado
        ? "Pagar - Logado"
        : "Pagar - Não Logado"}
    </button>
  );
}

export default BotaoDePagamento;