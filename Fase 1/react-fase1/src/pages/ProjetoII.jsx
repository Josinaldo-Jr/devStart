import { Botao, Container, Input, Link } from '../components/InterfaceUsuario/InterfaceUsuarioMelhorada';
function ProjetoII() {
  return (
    <>
      <h2>12-Projeto II:</h2>
      <Container>
        <h3>Exemplo de Container</h3>
        <Input placeholder="Digite seu nome" nome="nome" />
        <br />
        <Input type="email" placeholder="Digite seu email" nome="email" />
        <br />
        <Botao type="submit" disabled={true}>Entre</Botao>
        <br />
        <Link href="https://app.devstart.tech/learn/react">Tutorial React</Link>
      </Container>
    </>
  );
}

export default ProjetoII;
