function ObterUsuarioIdade(idade) {

    function obterPodeVotar() {
    return idade >= 18;
}

    return {
       obterPodeVotar
    }
}

export default ObterUsuarioIdade;