function obterPreco() {
    const preco = 10;

    function descrevePreco() {
        return `O preco é ${preco} euros`;
    }

    return [preco, descrevePreco];
}
 
function testeDesestruturar() {
    const [preco, descrevePreco] = obterPreco();
    return (
        <>
            <p>Preço: {preco}</p>
            <p>{descrevePreco()}</p>
        </>
    );
}

export default testeDesestruturar;