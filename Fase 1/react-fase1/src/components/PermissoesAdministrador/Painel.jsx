function Painel(props) {
    const titulo = props.entrou 
        ? "Bem-vindo de volta!" 
        : "Bem-vindo.";

    return (
        <div className="container">
            <h3>{titulo}</h3>
        </div>
    );
}
 
export default Painel;