function MetodoDePagamento({ nome }) {
  return (
    <li
      className={`metodo-de-pagamento opcao-${nome.toLowerCase()}`}
    >
      {nome}
    </li>
  );
}

export default MetodoDePagamento;