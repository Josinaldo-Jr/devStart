function MetodoDePagamento({ nome }) {
  return (<>
  <ul>
    <li
      className={`metodo-de-pagamento opcao-${nome.toLowerCase()}`}
    >
      {nome}
    </li>
  </ul>
    </>
  );
}

export default MetodoDePagamento;