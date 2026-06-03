function BarraDeNavegacao({ usuario }) {
  return (
    <div>
      Logado como {usuario.nome} {usuario.sobrenome}. Sair
    </div>
  );
}

export default BarraDeNavegacao;