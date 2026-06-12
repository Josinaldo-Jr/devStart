function imprimirDetalhesDoUsuario({usuario}) {   
   
    const [nome, idade] = usuario;
    return `${nome} tem ${idade} anos de idade.`;
}

export default imprimirDetalhesDoUsuario;