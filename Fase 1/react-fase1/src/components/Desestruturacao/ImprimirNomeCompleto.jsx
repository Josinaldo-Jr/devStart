function imprimirNomeCompleto({nomeCompleto}) {
       
    const [nome, sobrenome] = nomeCompleto;

    return (`${nome} ${sobrenome}`);
}

export default imprimirNomeCompleto;