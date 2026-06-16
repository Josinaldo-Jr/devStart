function ObterUsuario(nome, sobrenome) {

    function obterNomeCompleto() {
        return `${nome} ${sobrenome}`;
    }

    return {
        nome,
        sobrenome,
        obterNomeCompleto
    };
}

export default ObterUsuario;