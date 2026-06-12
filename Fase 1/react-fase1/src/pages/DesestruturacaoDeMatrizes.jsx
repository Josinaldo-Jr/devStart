import ImprimirNomeCompleto from '../components/Desestruturacao/ImprimirNomeCompleto';
import ImprimirDetalhesDoUsuario from '../components/Desestruturacao/imprimirDetalhesDoUsuario';
import TesteDesestruturar from '../components/DesestruturacaoAvancada/TesteDesestruturar';
import DesestruturacaoFuncao from '../components/DesestruturacaoAvancada/DesestruturacaoFuncao';

function DesestruturacaoDeMatrizes
 () {
  return (
    <>
      <h2>13-Desestruturação de Matrizes:</h2>
      <ImprimirNomeCompleto nomeCompleto={["Josinaldo", "Euzébio"]} />
      <br />
      <ImprimirDetalhesDoUsuario usuario={["Josinaldo Euzébio", 37]} />
      <br />
      <TesteDesestruturar />    
      <br />
      <DesestruturacaoFuncao />
    </>
  );
}

export default DesestruturacaoDeMatrizes;