function Contador() {
  const handleButtonClick = () => alert("Botão clicado");

  return <button onClick={handleButtonClick}>Adicionar 1</button>;
}

export default Contador;
