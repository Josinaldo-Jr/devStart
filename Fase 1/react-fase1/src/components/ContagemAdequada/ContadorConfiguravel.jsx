import { useState } from "react";

function ContadorConfiguravel({ incrementarDe }) {
const [contagem, setContagem] = useState(0);

    function handleIncrementarPeloClique() {
        setContagem(contagem + incrementarDe);
    }

    return (<>
        <h2>{contagem} vezes clicado</h2>
        <button onClick={handleIncrementarPeloClique}>Adicionar {incrementarDe}</button>
    </>);
}

export default ContadorConfiguravel;
