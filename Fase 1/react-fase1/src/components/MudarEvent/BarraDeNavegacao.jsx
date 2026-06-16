function BarraDeNavegacao() {

    return (
    <select className="paises" onChange={() => alert("País alterado")}>
        <option>Holanda</option>
        <option>Bélgica</option>
        <option>França</option>
    </select>
    );
}

export default BarraDeNavegacao;