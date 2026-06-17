function SemPermissao() {
    return <div>
        <h3>Sem Permissão</h3>
        <p>
            Você não tem permissão para acessar esta página.<br />
            Entre em contato com seu gerente de conta.
        </p>
    </div>;
}

function Admin(props) {
    if(props.tipoDeUsuario === "admin"){

    return <div>
        <h3>Seja bem-vindo Admin</h3>
        <p>O portal do Admin permite que você gerencie todos os seus itens</p>
    </div>;
    } else if (props.tipoDeUsuario === "cliente") {
        return SemPermissao();
    }
}

export default Admin;