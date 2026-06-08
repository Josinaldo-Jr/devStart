import { Botao, Container, Input, Link } from "../components/KitUI/ProjetoUI";

function KitUI() {

  return (
    <>
      <h2>9-Kit UI:</h2>
      <Container>
        <h3>Exemplo de Container</h3>
        <Input placeholder="Digite seu nome" nome="nome" />
        <br />
        <Input type="email" placeholder="Digite seu email" nome="email" />
        <br />
        <Botao type="submit">Enviar</Botao>
        <br />
        <Link href="https://www.google.com">Acessar Google</Link>
      </Container>  
    </>
  );
}

export default KitUI;