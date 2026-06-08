function BarraDeNavegacao(props) {

   return (
        <>
        <div>
        Bem-vindo {props.usuario.nome} {props.usuario.sobrenome}
        </div>

        <p>
        Você recebeu {props.notificacoes.length} notificações
        </p>
        </>
    );
  
}
 
export default BarraDeNavegacao;