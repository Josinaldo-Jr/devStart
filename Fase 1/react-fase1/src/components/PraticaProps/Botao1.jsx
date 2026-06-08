function Botao(props) {

 let classeFinal;

    if (props.tamanho === "pequeno"){
        classeFinal = "botao-pequeno";
    } else if (props.tamanho === "enorme") {
        classeFinal = "botao-enorme";
    } else {
        classeFinal = "botao-medio";
    }

    return (
        <button className={classeFinal}>Botão com classe {classeFinal}</button>
    );
       
}
 
export default Botao;