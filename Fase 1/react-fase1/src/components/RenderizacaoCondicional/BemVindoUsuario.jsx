function BemVindoUsuario(props) {
    if (!props.usuario) {
        return (null);
    }
    return <h3>Bem-vindo {props.usuario.nome}</h3>
}

export default BemVindoUsuario;