function TesteDesestruturar() {
  
const [idade, descreveIdade] = obterIdade();

  console.log(idade);
  console.log(descreveIdade);

  return (
    <div>
      {idade} <br />
      {descreveIdade()}
    </div>
  );

}

function obterIdade() {
    const idade = 20;

    function descreveIdade() {
        return `A idade é ${idade} anos`;
    }
    return [idade, descreveIdade];
}

export default TesteDesestruturar;